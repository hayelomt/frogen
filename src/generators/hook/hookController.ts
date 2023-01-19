import { parseModelName } from '../../utils/text';
import { getCorePrefix, parseTypeList } from '../../utils/tools';
import { FormMeta } from '../../utils/types';
import { generateDataCreator, generateFormDataCreator } from './createItem';
import { generateHookForm } from './hookForm';

export const generateHook = (curDir: string, meta: FormMeta): string => {
  const {
    create: canCreate,
    update: canUpdate,
    delete: canDelete,
  } = meta.ui.modes;
  const names = parseModelName(meta.model);
  const corePrefix = getCorePrefix(curDir, meta.ui.baseFolderPath);

  const formContent = generateHookForm(meta);
  const typeList = parseTypeList(meta);
  const createContent = canCreate
    ? typeList.has('File')
      ? generateFormDataCreator(meta)
      : generateDataCreator(meta)
    : '';

  return `import { useForm } from '@mantine/form';
import { FormModes } from '${corePrefix}core/util/types';
import { ${names.modelName}, ${names.modelName}Dto } from '../models/${
    names.camelName
  }';
import ${names.modelName}Service from '../services/${names.camelName}Service';
${
  canCreate
    ? typeList.has('File')
      ? `import { useFormDataApi } from '${corePrefix}core/hooks/api/useFormDataApi';`
      : 'import {};'
    : ''
}
${
  canCreate || canDelete || canUpdate
    ? `import { toastError, toastSuccess } from '${corePrefix}core/util/alert';`
    : ''
}${
    canCreate || canUpdate
      ? `import FormService, { FormParser } from '${corePrefix}core/services/formService';`
      : ''
  }

export const use${names.modelName}FormController = (instance?: ${
    names.modelName
  }) => 
{ 
  const mode: FormModes = !instance ? 'create' : 'edit';
  const { upload, loading, progress } = useFormDataApi();
${formContent}
${createContent}
  return { form, mode, progress, loading${
    canCreate ? `, create${names.modelName}` : ''
  } }
};
  `;
};
