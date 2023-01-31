import { parseModelName } from '../../../utils/text';
import { FieldType, FormMeta, FormMetaField } from '../../../utils/types';

const getFieldInitializer = (field: FieldType) => {
  if (field === 'number') return '0';
  if (field === 'File') return `null`;
  if (field === 'bool') return 'false';
  if (field === 'date') return 'null';

  return `''`;
};

export const getInitializer = (meta: FormMeta): string => {
  const name = parseModelName(meta.model);
  const spaces = '      ';

  const getFieldVal = (field: FormMetaField) => {
    if (field.type === 'bool') {
      return `Boolean(${name.camelName}?.${field.fieldName})`;
    }
    if (field.type === 'date') {
      return `${name.camelName}?.${field.fieldName} ? new Date(${name.camelName}!.${field.fieldName}) : null`;
    }

    return `${name.camelName}?.${field.fieldName}`;
  };

  return meta.fields
    .map((values) =>
      values
        .map(
          (field) =>
            `${spaces}${field.fieldName}: ${getFieldVal(
              field
            )} || ${getFieldInitializer(field.type)},`
        )
        .join('\n')
    )
    .join('\n');
};
