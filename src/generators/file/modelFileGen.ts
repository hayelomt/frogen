import fs from 'fs';
import path from 'path';
import { parseModelName } from '../../utils/text';
import { FormMeta } from '../../utils/types';
import { generateBaseModel } from '../model/baseModel';

export const generateModelFile = (baseFolder: string, meta: FormMeta) => {
  const parsedName = parseModelName(meta.model);

  const curDir = path.join(baseFolder, 'lib', 'models');
  const modelFileName = path.join(curDir, `${parsedName.camelName}.ts`);
  const modelNameContent = generateBaseModel(curDir, meta);

  fs.writeFileSync(modelFileName, modelNameContent);
};
