import { parseModelName } from '../../../utils/text';
import { FormMeta, FormMetaField } from '../../../utils/types';

const parseFormField = (item: FormMetaField): string => {
  if (item.fileType === 'image') {
    return `<ImagePreview media={(item.media || []).filter((i) => i.collection_name === '${item.collectionName}')[0]} />`;
  }

  return `{item.${item.fieldName}}`;
};

export const generateRows = (meta: FormMeta): string => {
  const fields = meta.fields
    .reduce((a, b) => a.concat(b), [])
    .filter((i) => i.hideOnTable !== true);
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
      ${data}
      <td><DateDisplay date={item.updated_at} /></td>
      <td style={{ maxWidth: '120px' }}>
        <Group spacing={4}>
          <ActionIcon radius="xs" onClick={() => console.log('edit')}>
            <IconEdit size={16} />
          </ActionIcon>${
            meta.ui.modes.delete
              ? `\n          <DeleteItem
            id={item.id}
            deleteUrl={\`${meta.api.endpoints.delete}/\${item.id}\`}
            onDeleted={() => {
              remove${name.modelName}(item.id);
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
