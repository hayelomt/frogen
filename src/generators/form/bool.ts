import { FormMetaField } from '../../utils/types';

export const genBoolForm = ({
  fieldName,
  label,
  nonEditable,
}: FormMetaField) => {
  const spaces = '              ';
  return `<Switch${nonEditable ? `\n${spaces}disabled={mode === 'edit'}` : ''}
              mt="sm"
              label="${label}"
              {...form.getInputProps('${fieldName}', { type: 'checkbox' })}
            />  
  `;
};
