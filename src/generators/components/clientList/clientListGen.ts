import { parseModelName } from '../../../utils/text';
import { getCorePrefix } from '../../../utils/tools';
import { FormMeta } from '../../../utils/types';
import { generateListHeader } from './listHeader';
import { generateRows } from './rows';

export const generateClientListComponent = (
  curDir: string,
  meta: FormMeta
): string => {
  const corePrefix = getCorePrefix(curDir, meta.ui.baseFolderPath);
  const model = parseModelName(meta.model);

  const fields = meta.fields
    .reduce((a, b) => a.concat(b), [])
    .filter((i) => i.hideOnTable !== true);
  const importPreview = fields.map((i) => i.fileType).includes('image');

  return `import { ActionIcon, Box, Flex, Grid, Group, Table } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons';
import { ${model.modelName} } from '../lib/models/${model.camelName}';
${
  importPreview
    ? `import ImagePreview from '${corePrefix}core/ui/shared/ImagePreview'`
    : ''
}

type ${model.modelName}ListProps = {
  ${meta.plural.model}: ${model.modelName}[];
};

const ${model.modelName}List = ({ ${meta.plural.model} }: ${
    model.modelName
  }ListProps) => {
  ${generateRows(meta)}
  return (
    <>
      <Table highlightOnHover>${generateListHeader(meta)}
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};

export default ${model.modelName}List;

  `;
};