import fs from 'fs';
import path from 'path';
import { parseModelName } from '../../../utils/text';
import { FormMeta } from '../../../utils/types';
import { generateListComponent } from '../components/list/listGen';

export const generateListComponentFile = (
  baseFolder: string,
  meta: FormMeta
) => {
  const name = parseModelName(meta.model);
  const curDir = path.join(baseFolder, 'components');
  const fileName = path.join(curDir, `${name.modelName}List.tsx`);
  const hookContent = generateListComponent(curDir, meta);

  fs.writeFileSync(fileName, hookContent);
};
