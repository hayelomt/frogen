import fs from 'fs';
import path from 'path';
import { parseModelName } from '../../../utils/text';
import { FormMeta } from '../../../utils/types';
import { generateForm } from '../form/formContent';

export const generateFormFile = (baseFolder: string, meta: FormMeta) => {
  const name = parseModelName(meta.model);

  const curDir = path.join(baseFolder, 'components');
  const formFileName = path.join(curDir, `${name.modelName}Form.tsx`);
  const formContent = generateForm(meta);

  fs.writeFileSync(formFileName, formContent);
};
