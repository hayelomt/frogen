import { DropdownMeta, FormMetaField } from '../../utils/types';

export const genDropdownForm = (arg: FormMetaField) => {
  const { fieldName, label, nonEditable, optional, selectOptions } =
    arg as DropdownMeta;
  const spaces = '              ';
  return `<Select${optional ? '' : `\n${spaces}withAsterisk`}${
    nonEditable ? `\n${spaces}disabled={mode === 'edit'}` : ''
  }
              placeholder="Select One"
              label="${label}"
              data={${JSON.stringify(selectOptions, null, 4)}}
              {...form.getInputProps('${fieldName}')}
            />`;
};
