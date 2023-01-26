import path from 'path';
import { generateFormFile } from '../generators/ui/file/formFileGen';
import { generateFormHookFile } from '../generators/ui/file/formHookFileGen';
import { generateListComponentFile } from '../generators/ui/file/listComponentFileGen';
import { generateLoadListHookFile } from '../generators/ui/file/listHookFileGen';
import { generateListStateFile } from '../generators/ui/file/listStateFileGen';
import { generateModelFile } from '../generators/ui/file/modelFileGen';
import { generatePageFile } from '../generators/ui/file/pageFileGen';
import { generateServiceFile } from '../generators/ui/file/serviceGen';
import { generateUiFolders } from '../generators/ui/folder/uiFolderGen';
import { generateImports } from '../generators/ui/import/generateImport';
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
