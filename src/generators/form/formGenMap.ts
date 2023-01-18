import { DropdownMeta, FieldType, FormMetaField } from '../../utils/types';
import { genBoolForm } from './bool';
import { genDropdownForm } from './dropdown';
import { genNumberForm } from './number';
import { genTextForm } from './text';
import { genTextAreaForm } from './textarea';

export const formMap: Record<
  FieldType,
  (_: FormMetaField | DropdownMeta) => string
> = {
  varchar: genTextForm,
  number: genNumberForm,
  text: genTextAreaForm,
  File: genTextForm,
  bool: genBoolForm,
  dropdown: genDropdownForm,
};
