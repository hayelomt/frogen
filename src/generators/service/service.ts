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
import { getApiData } from '${corePrefix}core/services/api';
import { FetchListArgs, Paginated } from '${corePrefix}core/util/types';
import ApiQueryBuilderService from '${corePrefix}core/services/apiQueryBuilderService';

const ${name.modelName}Service = {
  fetch${meta.plural.capital}: (args: FetchListArgs) => {
    const query = ApiQueryBuilderService.parseQuery(args);
    return getApiData<Paginated<${name.modelName}>>(\`${meta.api.endpoints.read}?\${query}\`, {
      token: args.token,
    });
  },

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
