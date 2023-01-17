import fs from 'fs';
import path from 'path';
import { parseModelName } from '../../utils/text';
import { FormMeta } from '../../utils/types';
import { generateBaseModel } from '../model/baseModel';

export const generateModelFile = (baseFolder: string, meta: FormMeta) => {
  const parsedName = parseModelName(meta.model);

  const modelNameContent = generateBaseModel(meta);
  const modelFileName = path.join(
    baseFolder,
    'lib',
    'models',
    `${parsedName.camelName}.ts`
  );
  fs.writeFileSync(modelFileName, modelNameContent);
};
