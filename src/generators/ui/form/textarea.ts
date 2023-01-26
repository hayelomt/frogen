import { FormMetaField } from '../../../utils/types';

export const genTextAreaForm = ({
  fieldName,
  label,
  optional,
  nonEditable,
}: FormMetaField) => {
  const spaces = '              ';
  return `<Textarea${optional ? '' : `\n${spaces}withAsterisk`}${
    nonEditable ? `\n${spaces}disabled={mode === 'edit'}` : ''
  }
              placeholder="${label}"
              label="${label}"
              {...form.getInputProps('${fieldName}')}
            />`;
};
