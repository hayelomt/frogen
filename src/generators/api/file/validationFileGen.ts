import fs from 'fs';
import path from 'path';
import { parseModelName } from '../../../utils/text';
import { FormMeta } from '../../../utils/types';
import {
  generateCreateRequest,
  generateEditRequest,
} from '../validation/validation';

export const generateApiValidationFile = (meta: FormMeta) => {
  console.log('Generating validator'.green);

  const name = parseModelName(meta.model);
  const createContent = generateCreateRequest(meta);
  const editContent = generateEditRequest(meta);
  const basePath = path.join(
    meta.api.baseFolderPath,
    `app/Http/Requests/${name.modelName}`
  );
  if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

  const createFilePath = path.join(basePath, `Create${name.modelName}Val.php`);
  fs.writeFileSync(createFilePath, createContent);

  if (meta.api.controllerMode === 'multi') {
    const editFilePath = path.join(basePath, `Edit${name.modelName}Val.php`);
    fs.writeFileSync(editFilePath, editContent);
  }
};
