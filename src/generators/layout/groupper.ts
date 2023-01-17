import { formMap } from '../form/formGenMap';
import { FormMeta } from '../../utils/types';

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
        <Grid>
          ${inputsMapped}
        </Grid>
        `;
};

export const groupForm = (meta: FormMeta): string => {
  const groupedInputs = meta.fields
    .map((inputItems) => {
      const inputFields = inputItems.map((formField) =>
        formMap[formField.type]({
          label: formField.label,
          field: formField.fieldName,
        })
      );
      return groupInputRows(inputFields);
    })
    .join('\n');

  return `
      <form onSubmit={form.onSubmit(createGrade)}>
        ${groupedInputs}
      </form>
   `;
};
