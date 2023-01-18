import { FormMetaField } from '../../utils/types';

export const genFileForm = ({
  fieldName,
  label,
  optional,
  nonEditable,
  fileType,
}: FormMetaField) => {
  const spaces = '              ';
  return `<FileInput${optional ? '' : `\n${spaces}withAsterisk`}${
    nonEditable ? `\n${spaces}disabled={mode === 'edit'}` : ''
  }
              placeholder="Upload ${fileType === 'image' ? 'image' : 'file'}"${
    fileType === 'image' ? '\naccept="image/png,image/jpeg"' : ''
  }
              label="${label}"
              {...form.getInputProps('${fieldName}')}
            />
            ${
              fileType === 'image'
                ? `{form.values.${fieldName} !== null && (
              <Grid p="md">
                <img
                  width="250px"
                  src={URL.createObjectURL(form.values.${fieldName})}
                />
              </Grid>
            )}`
                : ''
            }
            `;
};
