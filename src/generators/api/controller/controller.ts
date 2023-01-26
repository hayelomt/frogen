import { parseTypeList } from '../../../utils/tools';
import { FormMeta } from '../../../utils/types';
import { generateMultiController } from './multi';
import { generateMultiMediaController } from './multi-media';
import { generateSingleController } from './single';

export const generateController = (meta: FormMeta): string => {
  if (meta.api.controllerMode === 'single') {
    return generateSingleController(meta);
  }

  const types = parseTypeList(meta);

  return types.has('File')
    ? generateMultiMediaController(meta)
    : generateMultiController(meta);
};
