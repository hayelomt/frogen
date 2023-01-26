import fs from 'fs';
import path from 'path';
import { parseModelName } from '../../../utils/text';
import { FormMeta } from '../../../utils/types';
import { generateService } from '../service/service';

export const generateServiceFile = (baseFolder: string, meta: FormMeta) => {
  const parsedName = parseModelName(meta.model);

  const curDir = path.join(baseFolder, 'lib', 'services');
  const serviceFileName = path.join(
    curDir,
    `${parsedName.camelName}Service.ts`
  );
  const serviceContent = generateService(curDir, meta);
  fs.writeFileSync(serviceFileName, serviceContent);
};
