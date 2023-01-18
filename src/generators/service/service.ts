import { parseModelName } from '../../utils/text';
import { getCorePrefix } from '../../utils/tools';
import { FormMeta } from '../../utils/types';
import { getInitializer } from './initializer';
import { getRules } from './rules';

export const generateService = (curDir: string, meta: FormMeta): string => {
  const name = parseModelName(meta.model);
  const initializer = getInitializer(meta);
  const rules = getRules(meta);
  const corePrefix = getCorePrefix(curDir, meta.ui.baseFolderPath);

  return `import { FormValidateInput } from '@mantine/form/lib/types';
import { ${name.modelName}, ${name.modelName}Dto } from '../models/${name.camelName}';
import {
  validateRules,
  Validator,
} from '${corePrefix}core/services/validation';

const ${name.modelName}Service = {
  initialize: (${name.camelName}?: ${name.modelName}): ${name.modelName}Dto => {
    return {
${initializer}
    }
  },

  validation: (): FormValidateInput<${name.modelName}Dto | undefined> => {
    return {
${rules}
    }
  }
};

export default ${name.modelName}Service;
`;
};
