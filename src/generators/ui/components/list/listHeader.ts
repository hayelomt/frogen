import { getFieldList } from '../../../../utils/tools';
import { FormMeta } from '../../../../utils/types';

export const generateListHeader = (meta: FormMeta): string => {
  const fields = getFieldList(meta).filter((i) => i.hideOnTable !== true);
  const header = fields
    .map((i) => `            <th>${i.label}</th>`)
    .join('\n');

  return `
        <thead>
          <tr>
            <th
              style={{
                width: 25,
              }}
            >
              <Checkbox
                size="xs"
                indeterminate={checkIndeterminate}
                checked={checkSelected}
                disabled={clients.length === 0 || deletingMulti}
                onChange={() => {
                  toggleAllSelection(
                    checkIndeterminate || checkSelected ? false : true
                  );
                }}
              />
            </th>
${header}
            <th>Created at</th>
            <th>Updated at</th>
            <th style={{ maxWidth: '120px' }}></th>
          </tr>
        </thead>
  `;
};
