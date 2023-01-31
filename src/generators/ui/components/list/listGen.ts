import { parseModelName } from '../../../../utils/text';
import { getCorePrefix, getFieldList } from '../../../../utils/tools';
import { FormMeta } from '../../../../utils/types';
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
  const importFilePreview =
    fields.filter((i) => i.type === 'File' && i.fileType !== 'image').length >
    0;
  const name = parseModelName(meta.model);
  const visibleFields = getFieldList(meta).filter(
    (i) => i.hideOnTable !== true
  );

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
${
  importFilePreview
    ? `import FilePreview from '${corePrefix}core/ui/shared/FilePreview'`
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
    visibleColumns,
  ] = use${meta.plural.capital}State(
    (state) => [
      ${meta.ui.modes.delete ? `state.remove${meta.plural.capital}` : ''}${
    meta.ui.modes.delete && meta.ui.modes.update && ', '
  }${meta.ui.modes.update ? `state.setEditable${name.modelName},` : ''}
      state.selectedItems,
      state.toggleSelection,
      state.toggleAllSelection,
      state.deletingMulti,
      state.visibleColumns,
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

  const headers = useMemo(
    () => (
      <>
      ${visibleFields
        .map(
          (i) => `{visibleColumns.has('${i.fieldName}') && <th>${i.label}</th>}`
        )
        .join('\n')}
        {visibleColumns.has('created_at') && <th>Created at</th>}
        {visibleColumns.has('updated_at') && <th>Updated at</th>}
      </>
    ),
    [visibleColumns]
  );

  return (
    <>

      <div
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
        }}
      >
        <Table highlightOnHover>
         <thead>
          <tr>
            <th
              style={{
                width: 25,
              }}
            >
              <Checkbox
                size="xs"
                indeterminate={checkIndeterminate}
                checked={checkSelected}
                disabled={${meta.plural.model}.length === 0 || deletingMulti}
                onChange={() => {
                  toggleAllSelection(
                    checkIndeterminate || checkSelected ? false : true
                  );
                }}
              />
            </th>
            {headers}
            <th style={{ maxWidth: '120px' }}></th>
          </tr>
        </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </>
  );
};

export default ${model.modelName}List;

  `;
};
