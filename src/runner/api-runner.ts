import { generateApiControllerFile } from '../generators/api/file/controllerFileGen';
import { generateApiModelFile } from '../generators/api/file/modelFileGen';
import { generateApiValidationFile } from '../generators/api/file/validationFileGen';
import { FormMeta } from '../utils/types';

export const generateApi = async (meta: FormMeta) => {
  console.log('📊 Generating api\n'.cyan);

  // await generateApiModelFile(meta);
  generateApiValidationFile(meta);
  generateApiControllerFile(meta);
};
