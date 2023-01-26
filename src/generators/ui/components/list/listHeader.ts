import { FormMeta } from '../../../../utils/types';

export const generateListHeader = (meta: FormMeta): string => {
  const fields = meta.fields
    .reduce((a, b) => a.concat(b), [])
    .filter((i) => i.hideOnTable !== true);
  const header = fields
    .map((i) => `            <th>${i.label}</th>`)
    .join('\n');

  return `
        <thead>
          <tr>
${header}
            <th>Updated at</th>
            <th style={{ maxWidth: '120px' }}></th>
          </tr>
        </thead>
  `;
};
