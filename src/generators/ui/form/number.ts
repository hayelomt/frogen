import { FormMetaField } from '../../../utils/types';

export const genNumberForm = ({
  fieldName,
  label,
  optional,
  nonEditable,
}: FormMetaField) => {
  const spaces = '              ';
  return `<TextInput${optional ? '' : `\n${spaces}withAsterisk`}${
    nonEditable ? `\n${spaces}disabled={mode === 'edit'}` : ''
  }
              placeholder="${label}"
              label="${label}"
              type="number"
              {...form.getInputProps('${fieldName}')}
            />`;
};
