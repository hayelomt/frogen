export type FieldType = 'varchar' | 'text' | 'number' | 'File' | 'bool';

export type FormMetaField = {
  type: FieldType;
  fieldName: string;
  label: string;
  optional?: boolean;
  editable?: boolean;
};

export type FormMeta = {
  model: string;
  fields: FormMetaField[][];
  ui: {
    baseFolderPath: string;
    parentFolder?: string;
  };
};

export type ModelFieldType =
  | 'number'
  | 'string'
  | 'File'
  | 'number | null'
  | 'string | null'
  | 'File | null';
