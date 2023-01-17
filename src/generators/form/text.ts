export const genTextForm = ({
  field,
  label,
}: {
  label: string;
  field: string;
}) => {
  return `<TextInput
              withAsterisk
              placeholder="${label}"
              label="${label}"
              {...form.getInputProps('${field}')}
            />`;
};
