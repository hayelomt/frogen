import { parseModelName } from '../../utils/text';
import { getCorePrefix } from '../../utils/tools';
import { FormMeta } from '../../utils/types';

export const generatePage = (curDir: string, meta: FormMeta): string => {
  const corePrefix = getCorePrefix(curDir, meta.ui.baseFolderPath);
  const name = parseModelName(meta.model);

  return `import { Box, Button, Drawer, Group, Text } from '@mantine/core';
import { IconPlus } from '@tabler/icons';
import { useState } from 'react';
import Layout from '${corePrefix}core/ui/layout/Layout';
import TableFilter from '${corePrefix}core/ui/shared/TableFilter';
import TableFooter from '${corePrefix}core/ui/shared/TableFooter';
import ${name.modelName}Form from '../components/${name.modelName}Form';
import ${name.modelName}List from '../components/${name.modelName}List';
import { useLoad${meta.plural.capital} } from '../lib/hooks/useLoad${meta.plural.capital}';

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
  } = useLoad${meta.plural.capital}();

  return (
    <>
      <Layout>
        <Box sx={{ position: 'relative', height: '100%' }} px="sm">
          <Group py="md" mb="sm" position="apart">
            <Text size="xl">${name.modelName}s</Text>

            <Button
              variant="subtle"
              leftIcon={<IconPlus size={15} />}
              onClick={() => setFormOpen(true)}
            >
              Add ${name.modelName}
            </Button>
          </Group>

          <TableFilter onRefresh={handleFetch} loading={loading} />
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

        <Drawer
          opened={formOpen}
          onClose={() => setFormOpen(false)}
          title=""
          padding="xl"
          size="lg"
          position="right"
        >
          <${name.modelName}Form formOpen={formOpen} onClose={() => setFormOpen(false)} />
        </Drawer>
      </Layout>
    </>
  );
};

export default ${name.modelName}Page;

  `;
};
