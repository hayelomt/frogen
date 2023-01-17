import path from 'path';
import { generateUiFolders } from '../generators/folder/uiFolderGen';
import { groupForm } from '../generators/layout/groupper';
import { FormMeta } from '../utils/types';

export const generateUi = (meta: FormMeta) => {
  // TODO: Add existing file check

  const baseFolder = path.join(
    meta.ui.baseFolderPath,
    'src',
    'features',
    meta.ui.parentFolder || '',
    meta.model.toLowerCase()
  );
  generateUiFolders(baseFolder);
  // console.log(groupForm(meta));
};
