export type FieldType =
  | 'varchar'
  | 'text'
  | 'number'
  | 'File'
  | 'bool'
  | 'dropdown'
  | 'date';

export type DropdownMeta = {
  type: 'dropdown';
  fieldName: string;
  label: string;
  optional?: boolean;
  nonEditable?: boolean;
  selectOptions: { label: string; value: string }[];
  fileType?: 'image' | 'file';
};

export type FormMetaField =
  | {
      type: FieldType;
      fieldName: string;
      label: string;
      optional?: boolean;
      nonEditable?: boolean;
      fileType?: 'image' | 'file';
    }
  | DropdownMeta;

export type FormMeta = {
  model: string;
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
