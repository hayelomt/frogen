import { parseModelName } from '../../../utils/text';
import { FormMeta } from '../../../utils/types';

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
      set({ curPage: val });
    },

    onSetRowsPerPage(val) {
      const updatedMeta = { ...get().tableMeta, limit: val };
      set({ tableMeta: updatedMeta, curPage: 1 });
      TableService.saveConfig(${name.modelName}Key, updatedMeta);
    },

    remove${name.modelName}(id) {
      set({
        ${meta.plural.model}: get().${meta.plural.model}.filter((i) => i.id !== id),
        total: get().total - 1,
      });
    },
  })
);
`;
};
