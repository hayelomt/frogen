import { parseModelName } from '../../utils/text';
import { FieldType, FormMeta } from '../../utils/types';

const getInitializer = (field: FieldType) => {
  if (field === 'number') return '0';
  if (field === 'File') return `null`;
  if (field === 'bool') return 'false';

  return `''`;
};

export const generateService = (meta: FormMeta): string => {
  const name = parseModelName(meta.model);
  const spaces = '      ';

  const initializer = meta.fields
    .map((values) =>
      values
        .map(
          (field) =>
            `${spaces}${field.fieldName}: ${name.camelName}?.${
              field.fieldName
            } || ${getInitializer(field.type)},`
        )
        .join('\n')
    )
    .join('\n');

  return `
import { ${name.modelName}, ${name.modelName}Dto } from '../models/${name.camelName}';

const ${name.modelName}Service = {
  initialize: (${name.camelName}?: ${name.modelName}): ${name.modelName}Dto => {
    return {
${initializer}
    }
  }
};

export default ${name.modelName}Service;
`;
};
