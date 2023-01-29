import { parseModelName } from '../../../../utils/text';
import { FormMeta } from '../../../../utils/types';

export const generateListStateHook = (meta: FormMeta): string => {
  const name = parseModelName(meta.model);

  return `  
const use${meta.plural.capital}State = create<${meta.plural.capital}State & ${meta.plural.capital}Action>()(
  (set, get) => ({
    ...initialState,

    async fetch${meta.plural.capital}(args: ApiListArgs) {
      set({ loading: true });
      const { data, error, mode } = await ${name.modelName}Service.fetch${meta.plural.capital}({
        ...args,
        ...get().tableMeta,
        curPage: get().curPage,
      });
      set({ loading: false });

      if (mode === 'error') {
        set({ error: error.msg || 'Unable to get ${meta.plural.label}' });
        return;
      }

      set({ ${meta.plural.model}: data.data, total: data.total });
    },

    updateTableMeta(args) {
      set({
        tableMeta: {
          ...get().tableMeta,
          ...args,
        },
      });
    },

    setCurPage(val) {
      set({ curPage: val, selectedItems: new Set() });
    },

    onSetRowsPerPage(val) {
      const updatedMeta = { ...get().tableMeta, limit: val };
      set({ tableMeta: updatedMeta, curPage: 1, selectedItems: new Set() });
      TableService.saveConfig(${name.modelName}Key, updatedMeta);
    },

    remove${meta.plural.capital}(ids) {
      set({
        ${meta.plural.model}: get().${meta.plural.model}.filter((i) => !ids.includes(i.id)),
        total: get().total - ids.length,
      });
    },

    setEditable${name.modelName}(val) {
      set({
        editable${name.modelName}: val,
      });
    },

    setFormLoading(val) {
      set({ formLoading: val });
    },

    add${name.modelName}(data) {
      set({
        ${meta.plural.model}: [data, ...get().${meta.plural.model}],
        total: get().total + 1,
      });
    },

    update${name.modelName}(data) {
      const curData = [...get().${meta.plural.model}];
      const index = get().${meta.plural.model}.findIndex((i) => i.id === data.id);
      if (index === -1) return;

      curData[index] = data;
      set({ ${meta.plural.model}: curData });
    },

    setSort(field, asc) {
      const updatedMeta: TableMeta = {
        ...get().tableMeta,
        sort_field: field,
        sort_op: asc ? 'asc' : 'desc',
      };
      set({ tableMeta: updatedMeta });
      TableService.saveConfig(${name.modelName}Key, updatedMeta);
    },

    setFilters(filters) {
      set({ filters })
    },

    toggleSelection(key) {
      const selections = new Set(get().selectedItems);
      if (selections.has(key)) {
        selections.delete(key);
      } else {
        selections.add(key);
      }
      set({ selectedItems: selections });
    },

    toggleAllSelection(val) {
      if (val) {
        set({ selectedItems: new Set(get().${meta.plural.model}.map((i) => i.id)) });
      } else {
        set({ selectedItems: new Set() });
      }
    },

    setDeletingMulti(val) {
      set({ deletingMulti: val });
    },
  })
);
`;
};
