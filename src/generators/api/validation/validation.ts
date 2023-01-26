import { parseModelName } from '../../../utils/text';
import { getFieldList } from '../../../utils/tools';
import { FormMeta } from '../../../utils/types';
import { validationMap } from './validationMap';

const generateCreateRules = (meta: FormMeta): string => {
  const fields = getFieldList(meta);

  return fields
    .map(
      (item) =>
        `\t\t\t'${item.fieldName}' => '${validationMap[item.type](
          item,
          'create'
        )}',`
    )
    .join('\n');
};

const generateEditRules = (meta: FormMeta): string => {
  const fields = getFieldList(meta);

  return fields
    .map(
      (item) =>
        `\t\t\t'${item.fieldName}' => '${validationMap[item.type](
          item,
          'edit'
        )}',`
    )
    .join('\n');
};

export const generateCreateRequest = (meta: FormMeta): string => {
  const name = parseModelName(meta.model);

  return `<?php

namespace App\\Http\\Requests\\${name.modelName};

use Illuminate\\Foundation\\Http\\FormRequest;

class Create${name.modelName}Val extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
${generateCreateRules(meta)}
        ];
    }
}
`;
};

export const generateEditRequest = (meta: FormMeta): string => {
  const name = parseModelName(meta.model);

  return `<?php

namespace App\\Http\\Requests\\${name.modelName};

use Illuminate\\Foundation\\Http\\FormRequest;

class Edit${name.modelName}Val extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
${generateEditRules(meta)}
        ];
    }
}
`;
};
