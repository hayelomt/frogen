import path from 'path';
import { generateHookFile } from '../generators/file/hookGen';
import { generateModelFile } from '../generators/file/modelGen';
import { generateServiceFile } from '../generators/file/serviceGen';
import { generateUiFolders } from '../generators/folder/uiFolderGen';
import { parseModelName } from '../utils/text';
import { FormMeta } from '../utils/types';

export const generateUi = (meta: FormMeta) => {
  // TODO: Add existing file check
  const parsedName = parseModelName(meta.model);

  const baseFolder = path.join(
    meta.ui.baseFolderPath,
    'src',
    'features',
    meta.ui.parentFolder || '',
    parsedName.folderName
  );

  generateUiFolders(baseFolder);

  generateModelFile(baseFolder, meta);

  generateServiceFile(baseFolder, meta);

  generateHookFile(baseFolder, meta);
};
