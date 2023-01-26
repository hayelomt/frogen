import { parseModelName } from '../../../utils/text';
import { getFieldList } from '../../../utils/tools';
import { FormMeta } from '../../../utils/types';

export const generateMultiController = (meta: FormMeta): string => {
  const name = parseModelName(meta.model);
  const fields = getFieldList(meta)
    .filter((i) => i.type !== 'File')
    .map((i) => i.fieldName);

  return `<?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Core\\ModelController;
use App\\Http\\Requests\\${name.modelName}\\Create${name.modelName}Val;
use App\\Http\\Requests\\${name.modelName}\\Edit${name.modelName}Val;
use App\\Models\\${name.modelName};

class ${name.modelName}Controller extends ModelController
{
    function __construct()
    {
        $this->model = new ${name.modelName}();
    }

    public function store(Create${name.modelName}Val $request) {
        return $this->storeModel($request, ${JSON.stringify(fields)});
    }

    public function update(Edit${name.modelName}Val $request, $id) {
        return $this->updateModel($request, ${
          name.modelName
        }::findOrFail($id), ${JSON.stringify(fields)});
    }
}`;
};
