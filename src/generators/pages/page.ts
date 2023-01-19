import { parseModelName } from '../../utils/text';
import { getCorePrefix } from '../../utils/tools';
import { FormMeta } from '../../utils/types';

export const generatePage = (curDir: string, meta: FormMeta): string => {
  const corePrefix = getCorePrefix(curDir, meta.ui.baseFolderPath);
  const name = parseModelName(meta.model);

  return `import { Button, Group, Text } from '@mantine/core';
import { IconPlus } from '@tabler/icons';
import { useState } from 'react';
import Layout from '${corePrefix}core/ui/layout/Layout';
import ${name.modelName}Form from '../components/${name.modelName}Form';

const ${name.modelName}Page = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <Layout>
        <Group p="md" mb="lg" position="apart">
          <Text size="xl">${name.label}s</Text>
          
          <Button
            variant="subtle"
            leftIcon={<IconPlus size={15} />}
            onClick={() => setFormOpen(true)}
          >
            Add ${name.label}
          </Button>
        </Group>

        <${name.modelName}Form onClose={() => setFormOpen(false)} formOpen={formOpen} />
      </Layout>
    </>
  );
};

export default ${name.modelName}Page;

  `;
};
