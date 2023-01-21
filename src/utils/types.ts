export type FieldType =
  | 'varchar'
  | 'text'
  | 'number'
  | 'File'
  | 'bool'
  | 'dropdown'
  | 'date';

type _MetaShared = {
  type: FieldType;
  fieldName: string;
  label: string;
  optional?: boolean;
  nonEditable?: boolean;
  fileType?: 'image' | 'file';
  collectionName?: string;
  hideOnTable?: boolean;
};

export type DropdownMeta = _MetaShared & {
  selectOptions: { label: string; value: string }[];
};

export type FormMetaField = _MetaShared | DropdownMeta;

export type FormMeta = {
  model: string;
  plural: {
    label: string;
    model: string;
    capital: string;
  };
  fields: FormMetaField[][];
  ui: {
    modes: {
      create: boolean;
      update: boolean;
      delete: boolean;
    };
    baseFolderPath: string;
    parentFolder?: string;
  };
  api: {
    endpoints: {
      create?: string;
      read?: string;
      update?: string;
      delete?: string;
      deleteMulti?: string;
    };
  };
};

export type ModelFieldType =
  | 'number'
  | 'string'
  | 'File'
  | 'number | null'
  | 'string | null'
  | 'File | null'
  | 'boolean'
  | 'Date | null';
