import fs from 'fs';
import path from 'path';
import { parseModelName } from '../../utils/text';
import { FormMeta } from '../../utils/types';
import { generatePage } from '../pages/page';

export const generatePageFile = (baseFolder: string, meta: FormMeta) => {
  const name = parseModelName(meta.model);

  const curDir = path.join(baseFolder, 'pages');
  const hookFileName = path.join(curDir, `${name.modelName}Page.tsx`);
  const hookContent = generatePage(curDir, meta);

  fs.writeFileSync(hookFileName, hookContent);
};
