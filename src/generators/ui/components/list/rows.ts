import { parseModelName } from '../../../../utils/text';
import { getFieldList } from '../../../../utils/tools';
import { FormMeta, FormMetaField } from '../../../../utils/types';

const parseFormField = (item: FormMetaField): string => {
  let row = '';
  if (item.fileType === 'image') {
    row = `<td style={{ minWidth: 60 }}><ImagePreview media={(item.media || []).filter((i) => i.collection_name === '${item.collectionName}')[0]} /></td>`;
  } else if (item.type === 'File') {
    row = `<td style={{ minWidth: 120 }}><FilePreview media={(item.media || []).filter((i) => i.collection_name === '${
      item.collectionName || 'files'
    }')[0]} /></td>`;
  } else if (item.type === 'date') {
    row = `<td style={{ minWidth: 120 }}><DateDisplay date={item.${item.fieldName}} /></td>`;
  } else if (item.type === 'bool') {
    row = `<td style={{ minWidth: 160 }}>{Boolean(item.${item.fieldName}) ? 'Yes' : 'No'}</td>`;
  } else {
    row = `<td style={{ minWidth: 160 }}>{item.${item.fieldName}}</td>`;
  }

  return `\t\t{visibleColumns.has('${item.fieldName}') && ${row}}`;
};

export const generateRows = (meta: FormMeta): string => {
  const fields = getFieldList(meta).filter((i) => i.hideOnTable !== true);
  const name = parseModelName(meta.model);

  const data = fields.map((i) => `  ${parseFormField(i)}`).join('\n');

  return `
  const rows = useMemo(() => ${meta.plural.model}.map((item) => (
    <tr
      onClick={() => {
      }}
      key={item.id}
      style={{ cursor: 'pointer' }}
    >
      <td style={{ width: 25 }}>
        <Checkbox
          checked={selectedItems.has(item.id)}
          disabled={deletingMulti}
          onChange={() => toggleSelection(item.id)}
          size="xs"
        />
      </td>
${data}
      {visibleColumns.has('created_at') && <td style={{ minWidth: 100 }}><DateDisplay date={item.created_at} /></td>}
      {visibleColumns.has('updated_at') && <td style={{ minWidth: 100 }}><DateDisplay date={item.updated_at} /></td>}
      <td style={{ maxWidth: '120px' }}>
        <Group spacing={4}>
          ${
            meta.ui.modes.update
              ? `<ActionIcon radius="xs" onClick={() => setEdit${name.modelName}(item)}>
            <IconEdit size={16} />
          </ActionIcon>`
              : ''
          }${
    meta.ui.modes.delete
      ? `\n          <DeleteItem
            id={item.id}
            deleteUrl={\`${meta.api.endpoints.delete}/\${item.id}\`}
            onDeleted={() => {
              remove${meta.plural.capital}([item.id]);
            }}
          />`
      : ''
  }
        </Group>
      </td>
    </tr>
  )), [visibleColumns, ${meta.plural.model}])
  `;
};
