import { FormMetaField } from '../../../utils/types';

export const genDateForm = ({
  fieldName,
  label,
  optional,
  nonEditable,
}: FormMetaField) => {
  const spaces = '              ';
  return `<DatePicker${optional ? '' : `\n${spaces}withAsterisk`}${
    nonEditable ? `\n${spaces}disabled={mode === 'edit'}` : ''
  }
              placeholder="Pick a date"
              label="${label}"
              {...form.getInputProps('${fieldName}')}
            />`;
};
