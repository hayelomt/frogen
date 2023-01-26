import fs from 'fs';
import path from 'path';
import { parseModelName } from '../../../utils/text';
import { FormMeta } from '../../../utils/types';
import { generateApiModel } from '../model/model';

export const generateApiModelFile = async (meta: FormMeta) => {
  console.log('Generating model'.green);
  const content = await generateApiModel(meta);
  const name = parseModelName(meta.model);
  const filePath = path.join(
    meta.api.baseFolderPath,
    'app/Models/',
    `${name.modelName}.php`
  );

  fs.writeFileSync(filePath, content);
};
