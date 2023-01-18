import { parseModelName } from '../../utils/text';
import { FieldType, FormMeta } from '../../utils/types';

const getFieldInitializer = (field: FieldType) => {
  if (field === 'number') return '0';
  if (field === 'File') return `null`;
  if (field === 'bool') return 'false';

  return `''`;
};

export const getInitializer = (meta: FormMeta): string => {
  const name = parseModelName(meta.model);
  const spaces = '      ';

  return meta.fields
    .map((values) =>
      values
        .map(
          (field) =>
            `${spaces}${field.fieldName}: ${name.camelName}?.${
              field.fieldName
            } || ${getFieldInitializer(field.type)},`
        )
        .join('\n')
    )
    .join('\n');
};
