import { FormMeta } from '../../../utils/types';

export const generateSchema = (meta: FormMeta) => {
  const fields = meta.fields.reduce((a, b) => a.concat(b), []);

  return fields
    .filter((i) => i.type !== 'File')
    .map((item) => {
      let builder = '\t\t\t$table->';
      if (item.type === 'varchar' || item.type === 'dropdown') {
        builder += `string('${item.fieldName}')`;
      }
      if (item.type === 'number') {
        if (item.fieldSubtype === 'int') {
          builder += `integer('${item.fieldName}')`;
        } else {
          builder += `float('${item.fieldName}')`;
        }
      }
      if (item.type === 'text') {
        builder += `text('${item.fieldName}', 'mediumtext')`;
      }
      if (item.type === 'bool') {
        builder += `boolean('${item.fieldName}')`;
      }
      if (item.type === 'date') {
        builder += `date('${item.fieldName}')`;
      }

      if (item.optional) {
        builder += '->nullable()';
      }
      if (item.default) {
        builder += `->defaultTo(${item.default})`;
      }

      return `${builder};`;
    })
    .join('\n');
};
