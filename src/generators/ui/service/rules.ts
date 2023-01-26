import { FormMeta, FormMetaField } from '../../../utils/types';

const getValidationRules = (field: FormMetaField): string => {
  const spaces = '          ';
  const rules: string[] = [];
  if (field.type === 'varchar' || field.type === 'text') {
    rules.push(`Validator.isString('${field.fieldName}', val)`);
  }
  if (field.type === 'number') {
    // rules.push(`Validator.isNumber('${field.fieldName}', val)`);
  }

  if (!field.optional) {
    rules.push(`Validator.isNotEmpty('${field.fieldName}', val)`);
  }

  return rules.map((i) => `${spaces}${i}`).join(',\n');
};

export const getRules = (meta: FormMeta) => {
  return meta.fields
    .map((rowItems) =>
      rowItems
        .filter((i) => i.type !== 'File')
        .map(
          (field) => `
      ${field.fieldName}: (val) =>
        validateRules([
${getValidationRules(field)}
        ]),`
        )
        .join('\n')
    )
    .join('\n');
};
