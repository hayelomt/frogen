import { parseModelName } from '../../utils/text';
import { getCorePrefix, hasImage } from '../../utils/tools';
import { FormMeta, FormMetaField, ModelFieldType } from '../../utils/types';

const parseModelFieldType = ({ type }: FormMetaField): ModelFieldType => {
  if (type === 'number') {
    return 'number';
  }
  if (type === 'File') {
    return 'File | null';
  }
  if (type === 'bool') {
    return 'boolean';
  }
  if (type === 'date') {
    return 'Date | null';
  }

  return 'string';
};

export const generateBaseModel = (curDir: string, meta: FormMeta) => {
  const corePrefix = getCorePrefix(curDir, meta.ui.baseFolderPath);
  const parsedName = parseModelName(meta.model);
  const spaces = '  ';

  const parsedMeta = meta.fields
    .map((itemRows) =>
      itemRows
        .map(
          (field) =>
            `${spaces}${field.fieldName}${
              field.optional ? '?' : ''
            }: ${parseModelFieldType(field)};`
        )
        .join('\n')
    )
    .join('\n');

  return `import { BaseResponseModel${
    hasImage(meta) ? ', Media' : ''
  } } from '${corePrefix}core/util/types';

export type ${parsedName.modelName}Dto = {
${parsedMeta}
}

export type ${parsedName.modelName} = {
${parsedMeta}
${hasImage(meta) ? '  media: Media[]' : ''}
} & BaseResponseModel; 
`;
};
