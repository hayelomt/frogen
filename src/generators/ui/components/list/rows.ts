import { parseModelName } from '../../../../utils/text';
import { getFieldList } from '../../../../utils/tools';
import { FormMeta, FormMetaField } from '../../../../utils/types';

const parseFormField = (item: FormMetaField): string => {
  if (item.fileType === 'image') {
    return `<ImagePreview media={(item.media || []).filter((i) => i.collection_name === '${item.collectionName}')[0]} />`;
  }

  return `{item.${item.fieldName}}`;
};

export const generateRows = (meta: FormMeta): string => {
  const fields = getFieldList(meta).filter((i) => i.hideOnTable !== true);
  const name = parseModelName(meta.model);

  const data = fields.map((i) => `  <td>${parseFormField(i)}</td>`).join('\n');

  return `
  const rows = ${meta.plural.model}.map((item) => (
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
      <td><DateDisplay date={item.created_at} /></td>
      <td><DateDisplay date={item.updated_at} /></td>
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
  ));
  `;
};
