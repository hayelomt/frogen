import { parseModelName } from '../../utils/text';
import { getCorePrefix, getFeaturePrefix } from '../../utils/tools';
import { FormMeta } from '../../utils/types';
import { generateCreator } from './createItem';
import { generateHookForm } from './hookForm';

export const generateHook = (curDir: string, meta: FormMeta): string => {
  const {
    create: canCreate,
    update: canUpdate,
    delete: canDelete,
  } = meta.ui.modes;
  const names = parseModelName(meta.model);
  const corePrefix = getCorePrefix(curDir, meta.ui.baseFolderPath);
  const featurePrefix = getFeaturePrefix(curDir, meta.ui.baseFolderPath);

  const formContent = generateHookForm(meta);
  const createContent = canCreate ? generateCreator(meta) : '';

  return `import { useForm } from '@mantine/form';
import { useState } from 'react';
import { FormModes } from '${corePrefix}core/util/types';
import { ${names.modelName}, ${names.modelName}Dto } from '../models/${
    names.camelName
  }';
import ${names.modelName}Service from '../services/${names.camelName}Service';
${
  canCreate
    ? `import { postApiData } from '${corePrefix}core/services/api';`
    : ''
}${
    canCreate || canDelete || canUpdate
      ? `import { ErrorParseService } from '${corePrefix}core/services/error';
import { toastError, toastSuccess } from '${corePrefix}core/util/alert';
import {useToken} from '${featurePrefix}/auth/lib/hooks/useToken';`
      : ''
  }

export const use${names.modelName}FormController = (instance?: ${
    names.modelName
  }) => 
{ 
  const mode = !instance ? 'create' : 'edit';
  const token = useToken();
  const [loading, setLoading] = useState(false);
${formContent}
${createContent}
  return { form, mode, loading${canCreate ? `, create${names.modelName}` : ''} }
};
  `;
};
