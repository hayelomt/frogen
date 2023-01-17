export type FieldType = 'varchar';

export type FormMeta = {
  model: string;
  fields: { type: FieldType; fieldName: string; label: string }[][];
  ui: {
    baseFolderPath: string;
    parentFolder?: string;
  };
};
