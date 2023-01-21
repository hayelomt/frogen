import path from 'path';
import { generateFormFile } from '../generators/file/formFileGen';
import { generateFormHookFile } from '../generators/file/formHookFileGen';
import { generateListComponentFile } from '../generators/file/listComponentFileGen';
import { generateLoadListHookFile } from '../generators/file/listHookFileGen';
import { generateListStateFile } from '../generators/file/listStateFileGen';
import { generateModelFile } from '../generators/file/modelFileGen';
import { generatePageFile } from '../generators/file/pageFileGen';
import { generateServiceFile } from '../generators/file/serviceGen';
import { generateUiFolders } from '../generators/folder/uiFolderGen';
import { generateImports } from '../generators/import/generateImport';
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

  generateFormHookFile(baseFolder, meta);

  if (meta.ui.modes.create || meta.ui.modes.update) {
    generateFormFile(baseFolder, meta);
  }

  generatePageFile(baseFolder, meta);

  generateImports(meta);

  generateListStateFile(baseFolder, meta);

  generateLoadListHookFile(baseFolder, meta);

  generateListComponentFile(baseFolder, meta);
};
