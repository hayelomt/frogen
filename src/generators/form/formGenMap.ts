import { DropdownMeta, FieldType, FormMetaField } from '../../utils/types';
import { genBoolForm } from './bool';
import { genDateForm } from './date';
import { genDropdownForm } from './dropdown';
import { genFileForm } from './file';
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
  File: genFileForm,
  bool: genBoolForm,
  dropdown: genDropdownForm,
  date: genDateForm,
};
