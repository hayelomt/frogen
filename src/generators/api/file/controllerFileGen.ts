import fs from 'fs';
import path from 'path';
import { parseModelName } from '../../../utils/text';
import { FormMeta } from '../../../utils/types';
import { generateController } from '../controller/controller';

export const generateApiControllerFile = (meta: FormMeta) => {
  console.log('Generating controller'.green);
  const content = generateController(meta);
  const name = parseModelName(meta.model);
  const filePath = path.join(
    meta.api.baseFolderPath,
    'app/Http/Controllers',
    `${name.modelName}Controller.php`
  );

  fs.writeFileSync(filePath, content);
};
