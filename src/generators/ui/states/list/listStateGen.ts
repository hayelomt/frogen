import { parseModelName } from '../../../../utils/text';
import { getCorePrefix } from '../../../../utils/tools';
import { FormMeta } from '../../../../utils/types';
import { generateListStateHook } from './listState';
import { generateListType } from './listType';

export const generateListState = (curDir: string, meta: FormMeta): string => {
  const corePrefix = getCorePrefix(curDir, meta.ui.baseFolderPath);
  const name = parseModelName(meta.model);

  return `import { create } from 'zustand';
import TableService, {
  TableMeta,
} from '${corePrefix}core/services/tableService';
import { ApiListArgs } from '${corePrefix}core/util/types';
import { ${name.modelName} } from '../models/${name.camelName}';
import ${name.modelName}Service from '../services/${name.camelName}Service';
${generateListType(meta)}  
${generateListStateHook(meta)}
export default use${meta.plural.capital}State;
`;
};
