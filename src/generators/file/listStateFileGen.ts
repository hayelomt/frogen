import fs from 'fs';
import path from 'path';
import { FormMeta } from '../../utils/types';
import { generateListState } from '../states/list/listStateGen';

export const generateListStateFile = (baseFolder: string, meta: FormMeta) => {
  const curDir = path.join(baseFolder, 'lib', 'states');
  const listStateFileName = path.join(
    curDir,
    `use${meta.plural.capital}State.ts`
  );
  const content = generateListState(curDir, meta);

  fs.writeFileSync(listStateFileName, content);
};
