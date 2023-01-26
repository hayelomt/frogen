import { FormMetaField } from '../../../utils/types';

export const genTextForm = ({
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
              {...form.getInputProps('${fieldName}')}
            />`;
};
