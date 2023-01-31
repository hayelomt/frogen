import { parseModelName } from '../../../../utils/text';
import { getFieldList } from '../../../../utils/tools';
import { FormMeta } from '../../../../utils/types';

export const generateListType = (meta: FormMeta): string => {
  const name = parseModelName(meta.model);
  const visibleFields = [
    ...getFieldList(meta)
      .filter((i) => !i.hideOnTable)
      .map((i) => i.fieldName),
    'created_at',
    'updated_at',
  ];

  return `
type ${meta.plural.capital}State = {
  ${meta.plural.model}: ${name.modelName}[];
  loading: boolean;
  error: string | null;
  tableMeta: TableMeta;
  curPage: number;
  total: number;
  editable${name.modelName}: ${name.modelName} | null;
  formLoading: boolean;
  filters: any[];
  selectedItems: Set<string>;
  deletingMulti: boolean;
  visibleColumns: Set<string>;
};

type ${meta.plural.capital}Action = {
  fetch${meta.plural.capital}: (args: ApiListArgs) => void;
  updateTableMeta: (args: Partial<TableMeta>) => void;
  setCurPage: (i: number) => void;
  onSetRowsPerPage: (val: number) => void;
  remove${meta.plural.capital}: (id: string[]) => void;
  setEditable${name.modelName}: (val: ${name.modelName} | null) => void;
  setFormLoading: (val: boolean) => void;
  add${name.modelName}: (data: ${name.modelName}) => void;
  update${name.modelName}: (data: ${name.modelName}) => void;
  setSort: (field: string, asc: boolean) => void;
  setFilters: (filters: any[]) => void;
  toggleSelection: (key: string) => void;
  toggleAllSelection: (val: boolean) => void;
  setDeletingMulti: (val: boolean) => void;
  toggleFieldVisibility: (field: string) => void;
};

const ${name.modelName}Key = '_table_${name.modelKey}';

const initialState: ${meta.plural.capital}State = {
  ${meta.plural.model}: [],
  loading: false,
  error: null,
  tableMeta: TableService.getSavedConfig(${name.modelName}Key),
  curPage: 1,
  total: 0,
  editable${name.modelName}: null,
  formLoading: false,
  filters: [],
  selectedItems: new Set(),
  deletingMulti: false,
  visibleColumns: new Set(
    TableService.getSavedConfig(${
      name.modelName
    }Key).visibleFields || ${JSON.stringify(visibleFields)}
  )
};
`;
};
