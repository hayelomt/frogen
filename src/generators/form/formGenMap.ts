import { FieldType } from '../../utils/types';
import { genTextForm } from './text';

export type FieldGenerator = {
  label: string;
  field: string;
};

export const formMap: Record<FieldType, (_: FieldGenerator) => string> = {
  varchar: genTextForm,
  number: genTextForm,
  File: genTextForm,
  text: genTextForm,
  bool: genTextForm,
};
