import { DropdownMeta, FormMetaField } from '../../utils/types';

export const genDropdownForm = (arg: FormMetaField) => {
  const { fieldName, label, nonEditable, selectOptions } = arg as DropdownMeta;
  const spaces = '              ';
  return `<Select${nonEditable ? `\n${spaces}disabled={mode === 'edit'}` : ''}
              placeholder="Select One"
              label="${label}"
              data={${JSON.stringify(selectOptions, null, 4)}}
              {...form.getInputProps('${fieldName}')}
            />`;
};
