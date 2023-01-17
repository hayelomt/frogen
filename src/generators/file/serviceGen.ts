import fs from 'fs';
import path from 'path';
import { parseModelName } from '../../utils/text';
import { FormMeta } from '../../utils/types';
import { generateService } from '../service/service';

export const generateServiceFile = (baseFolder: string, meta: FormMeta) => {
  const parsedName = parseModelName(meta.model);

  const serviceContent = generateService(meta);
  const serviceFileName = path.join(
    baseFolder,
    'lib',
    'services',
    `${parsedName.camelName}Service.ts`
  );
  fs.writeFileSync(serviceFileName, serviceContent);
};
