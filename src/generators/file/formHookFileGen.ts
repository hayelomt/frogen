import fs from 'fs';
import path from 'path';
import { parseModelName } from '../../utils/text';
import { FormMeta } from '../../utils/types';
import { generateFormHook } from '../hook/form/hookController';

export const generateFormHookFile = (baseFolder: string, meta: FormMeta) => {
  const name = parseModelName(meta.model);

  const curDir = path.join(baseFolder, 'lib', 'hooks');
  const hookFileName = path.join(
    curDir,
    `use${name.modelName}FormController.ts`
  );
  const hookContent = generateFormHook(curDir, meta);

  fs.writeFileSync(hookFileName, hookContent);
};
