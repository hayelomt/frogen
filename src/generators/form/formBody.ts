import { formMap } from './formGenMap';
import { FormMeta } from '../../utils/types';
import { parseModelName } from '../../utils/text';
import { parseTypeList } from '../../utils/tools';

const GRIDS = 12;

export const groupInputRows = (rowItems: string[]): string => {
  const smCount = GRIDS / rowItems.length;

  const inputsMapped = rowItems
    .map(
      (i) => `
          <Grid.Col xs={${GRIDS}} sm={${smCount}}>
            ${i}
          </Grid.Col>
  `
    )
    .join('\n');

  return `
        <Grid mx={0}>
          ${inputsMapped}
        </Grid>
        `;
};

export const generateFormBody = (meta: FormMeta): string => {
  const name = parseModelName(meta.model);
  const groupedInputs = meta.fields
    .map((inputItems) => {
      const inputFields = inputItems.map((formField) =>
        formMap[formField.type](formField)
      );
      return groupInputRows(inputFields);
    })
    .join('\n');
  const typeList = parseTypeList(meta);
  const progressIndicator = typeList.has('File')
    ? `{loading ? <Progress value={progress} /> : <Box h="8px"></Box>}`
    : '';

  return `
      <form onSubmit={form.onSubmit(create${name.modelName})}>${progressIndicator}
        ${groupedInputs}

        <Group position="right" mt="xl" pr="xs">
          <Button type="submit" loading={loading} disabled={loading}>
            Create
          </Button>

          <Button
            type="button"
            color="gray"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>
        </Group>
      </form>
   `;
};
