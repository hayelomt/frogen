import { parseModelName } from '../../../../utils/text';
import { getCorePrefix } from '../../../../utils/tools';
import { FormMeta } from '../../../../utils/types';
import { generateListHeader } from './listHeader';
import { generateRows } from './rows';

export const generateListComponent = (
  curDir: string,
  meta: FormMeta
): string => {
  const corePrefix = getCorePrefix(curDir, meta.ui.baseFolderPath);
  const model = parseModelName(meta.model);

  const fields = meta.fields
    .reduce((a, b) => a.concat(b), [])
    .filter((i) => i.hideOnTable !== true);
  const importPreview = fields.map((i) => i.fileType).includes('image');
  const name = parseModelName(meta.model);

  return `import { ActionIcon, Checkbox, Group, Table } from '@mantine/core';
import { IconEdit } from '@tabler/icons';
import { shallow } from 'zustand/shallow';
import { useMemo } from 'react';
import DateDisplay from '${corePrefix}core/ui/layout/components/DateDisplay';${
    meta.ui.modes.delete
      ? `\nimport DeleteItem from '${corePrefix}core/ui/shared/DeleteItem';`
      : ''
  }
import { ${model.modelName} } from '../lib/models/${model.camelName}';
${
  importPreview
    ? `import ImagePreview from '${corePrefix}core/ui/shared/ImagePreview'`
    : ''
}
import use${meta.plural.capital}State from '../lib/states/use${
    meta.plural.capital
  }State';

type ${model.modelName}ListProps = {
  ${meta.plural.model}: ${model.modelName}[];
};

const ${model.modelName}List = ({ ${meta.plural.model} }: ${
    model.modelName
  }ListProps) => {
  const [
    ${meta.ui.modes.delete ? `remove${meta.plural.capital}` : ''}${
    meta.ui.modes.delete && meta.ui.modes.update && ', '
  }${meta.ui.modes.update ? `setEdit${name.modelName},` : ''}
    selectedItems,
    toggleSelection,
    toggleAllSelection,
    deletingMulti,
  ] = use${meta.plural.capital}State(
    (state) => [
      ${meta.ui.modes.delete ? `state.remove${meta.plural.capital}` : ''}${
    meta.ui.modes.delete && meta.ui.modes.update && ', '
  }${meta.ui.modes.update ? `state.setEditable${name.modelName},` : ''}
      state.selectedItems,
      state.toggleSelection,
      state.toggleAllSelection,
      state.deletingMulti,
  ],
    shallow
  );

  const checkIndeterminate = useMemo(
    () => selectedItems.size > 0 && selectedItems.size < ${
      meta.plural.model
    }.length,
    [selectedItems]
  );
  const checkSelected = useMemo(
    () => selectedItems.size > 0 && selectedItems.size === ${
      meta.plural.model
    }.length,
    [selectedItems]
  );

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
