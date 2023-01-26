import { DropdownMeta, FormMetaField } from '../../../utils/types';

type ValFunction = (_item: FormMetaField, _mode: 'create' | 'edit') => string;

export const validationMap: Record<string, ValFunction> = {
  varchar: (item) =>
    `${item.optional ? 'nullable' : 'required'}|string|max:254`,
  number: (item) =>
    `${item.optional ? 'nullable' : 'required'}${
      item.fieldSubtype === 'int' && '|integer'
    }${item.fieldSubtype === 'float' && '|numeric'}`,
  text: (item) => `${item.optional ? 'nullable' : 'required'}|string`,
  File: (item, mode) =>
    `${
      item.optional || mode === 'edit' ? 'nullable' : 'required'
    }|file|max:20000${
      item.fileType === 'image' ? '|mimes:jpeg,jpg,png,svg' : ''
    }`,
  bool: (item) => `${item.optional ? 'nullable' : 'required'}|boolean`,
  dropdown: (item) =>
    `${item.optional ? 'nullable' : 'required'}|string|in:${(
      item as DropdownMeta
    ).selectOptions
      .map((i) => i.value)
      .join(',')}`,
  date: (item) => `${item.optional ? 'nullable' : 'required'}|date`,
};
