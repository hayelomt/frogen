import fs from 'fs';
import path from 'path';
import { FormMeta } from '../../../utils/types';
import { generateLoadListController } from '../hook/list/loadListGen';

export const generateLoadListHookFile = (
  baseFolder: string,
  meta: FormMeta
) => {
  const curDir = path.join(baseFolder, 'lib', 'hooks');
  const hookFileName = path.join(curDir, `useLoad${meta.plural.capital}.ts`);
  const hookContent = generateLoadListController(curDir, meta);

  fs.writeFileSync(hookFileName, hookContent);
};
