import fs from 'fs';
import path from 'path';
import { parseModelName } from '../../utils/text';
import { FormMeta } from '../../utils/types';
import { generateClientListComponent } from '../components/clientList/clientListGen';

export const generateListComponentFile = (
  baseFolder: string,
  meta: FormMeta
) => {
  const name = parseModelName(meta.model);
  const curDir = path.join(baseFolder, 'components');
  const fileName = path.join(curDir, `${name.modelName}List.tsx`);
  const hookContent = generateClientListComponent(curDir, meta);

  fs.writeFileSync(fileName, hookContent);
};
