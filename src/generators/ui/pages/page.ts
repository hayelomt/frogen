import { parseModelName } from '../../../utils/text';
import { getCorePrefix } from '../../../utils/tools';
import { FormMeta } from '../../../utils/types';

export const generatePage = (curDir: string, meta: FormMeta): string => {
  const corePrefix = getCorePrefix(curDir, meta.ui.baseFolderPath);
  const name = parseModelName(meta.model);

  return `import { Box, Button, Group, Text, Drawer } from '@mantine/core';
import { IconPlus } from '@tabler/icons';
import { useState } from 'react';
import Layout from '${corePrefix}core/ui/layout/Layout';
import TableFilter from '${corePrefix}core/ui/shared/TableFilter';
import TableFooter from '${corePrefix}core/ui/shared/TableFooter';${
    meta.ui.modes.create &&
    `
import ${name.modelName}Form from '../components/${name.modelName}Form';`
  }
import ${name.modelName}List from '../components/${name.modelName}List';
import { useLoad${meta.plural.capital} } from '../lib/hooks/useLoad${
    meta.plural.capital
  }';

const ${name.modelName}Page = () => {
  const [formOpen, setFormOpen] = useState(false);
  const {
    ${meta.plural.model},
    handleFetch,
    loading,
    onNext,
    onPrev,
    setCurPage,
    curPage,
    total,
    tableMeta,
    onSetRowsPerPage,
    edit${name.modelName},
    setEdit${name.modelName},
    formLoading,
    setSort,
    tableFields,
    viewColumns,
    filters,
    setFilters,
    selectedItems,
    remove${meta.plural.capital},
    setDeletingMulti,
    toggleAllSelection,
    toggleFieldVisibility,
    visibleColumns,
  } = useLoad${meta.plural.capital}();

  return (
    <>
      <Layout>
        <Box sx={{ position: 'relative', height: '100%' }} px="sm">
          <Group py="md" mb="sm" position="apart">
            <Text size="xl">${meta.plural.label}</Text>

            ${
              meta.ui.modes.create
                ? `<Button
              variant="subtle"
              leftIcon={<IconPlus size={15} />}
              onClick={() => setFormOpen(true)}
            >
              Add ${name.label}
            </Button>`
                : ''
            }
          </Group>

          <TableFilter
            sort={{
              fields: tableFields,
              currentField: tableMeta.sort_field,
              ascending: tableMeta.sort_op === 'asc',
              onApply: setSort,
            }}
            settings={{
              toggleField: toggleFieldVisibility,
              visibleFields: visibleColumns,
              columns: viewColumns,
            }}
            deleteProps={{
              selectedIds: ${
                meta.ui.modes.delete ? 'Array.from(selectedItems)' : '[]'
              },
              url: '${meta.api.endpoints.delete}/multi-delete',
              onDeleteDone: (ids) => {
                remove${meta.plural.capital}(ids);
                toggleAllSelection(false);
              },
              onSetMultiDeleting: setDeletingMulti,
            }}
            filter={{ filters, onApply: setFilters }}
            onRefresh={handleFetch}
            loading={loading}
          />
          <${name.modelName}List ${meta.plural.model}={${meta.plural.model}} />
          <TableFooter
            itemCount={${meta.plural.model}.length}
            loading={loading}
            curPage={curPage}
            total={total}
            perPage={tableMeta.limit}
            onNext={onNext}
            onPrev={onPrev}
            onSetPage={setCurPage}
            onSetRowsPerPage={onSetRowsPerPage}
          />
        </Box>
          ${
            meta.ui.modes.create || meta.ui.modes.update
              ? `<Drawer
          opened={formOpen || edit${name.modelName} !== null}
          onClose={() => {
            if (!formLoading) {
              setFormOpen(false);
              setEdit${name.modelName}(null);
            }
          }}
          title=""
          padding="xl"
          size="xl"
          position="right"
        >
          {Boolean(formOpen || edit${name.modelName} !== null) && (
            <${name.modelName}Form onClose={() => setFormOpen(false)} />
          )}
        </Drawer>`
              : ''
          }
      </Layout>
    </>
  );
};

export default ${name.modelName}Page;

  `;
};
