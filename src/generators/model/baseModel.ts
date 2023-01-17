import { parseModelName } from '../../utils/text';
import { FormMeta, FormMetaField, ModelFieldType } from '../../utils/types';

const parseModelFieldType = ({ type }: FormMetaField): ModelFieldType => {
  if (type === 'varchar' || type === 'text') {
    return 'string';
  }
  if (type === 'number') {
    return 'number';
  }
  if (type === 'File') {
    return 'File | null';
  }

  return 'string';
};

export const generateBaseModel = (meta: FormMeta) => {
  const parsedName = parseModelName(meta.model);
  const spaces = '  ';

  const parsedMeta = meta.fields
    .map((itemRows) =>
      itemRows
        .map(
          (field) =>
            `${spaces}${field.fieldName}${
              field.optional ? '?' : ''
            }: ${parseModelFieldType(field)};`
        )
        .join('\n')
    )
    .join('\n');

  return `
export type ${parsedName.modelName}Dto = {
${parsedMeta}
}

export type ${parsedName.modelName} = {
${parsedMeta}
}  
`;
};
