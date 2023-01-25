import { parseModelName } from '../../../utils/text';
import { getCorePrefix, parseTypeList } from '../../../utils/tools';
import { FormMeta } from '../../../utils/types';
import { generateDataCreator, generateFormDataCreator } from './createItem';
import { generateDataEdit, generateFormDataEdit } from './editItem';
import { generateHookForm } from './hookForm';

export const generateFormHook = (curDir: string, meta: FormMeta): string => {
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
  const editContent = canUpdate
    ? typeList.has('File')
      ? generateFormDataEdit(meta)
      : generateDataEdit(meta)
    : '';

  return `import { useForm } from '@mantine/form';
import { shallow } from 'zustand/shallow';
import { useEffect } from 'react';
import { FormModes } from '${corePrefix}core/util/types';
import { ${names.modelName}, ${names.modelName}Dto } from '../models/${
    names.camelName
  }';
import ${names.modelName}Service from '../services/${names.camelName}Service';
${
  canCreate
    ? typeList.has('File')
      ? `import { useFormDataApi } from '${corePrefix}core/hooks/api/useFormDataApi';`
      : `import { useDataApi } from '${corePrefix}core/hooks/api/useDataApi';`
    : ''
}
${
  canCreate || canDelete || canUpdate
    ? `import { toastError, toastSuccess } from '${corePrefix}core/util/alert';`
    : ''
}${
    canCreate || canUpdate
      ? `import ${
          typeList.has('File') ? 'FormService, ' : ''
        }{ FormParser } from '${corePrefix}core/services/formService';`
      : ''
  }
import use${meta.plural.capital}State from '../states/use${
    meta.plural.capital
  }State';

export const use${
    names.modelName
  }FormController = (onDone: () => void, instance?: ${
    names.modelName
  } | null) => 
{ 
  const mode: FormModes = !instance ? 'create' : 'edit';
  ${
    typeList.has('File')
      ? 'const { upload, loading, progress } = useFormDataApi();'
      : 'const { sendData, loading } = useDataApi();'
  }
  const [${meta.ui.modes.create ? `add${names.modelName}, ` : ''}${
    meta.ui.modes.update ? `update${names.modelName}, ` : ''
  }setFormLoading] = use${meta.plural.capital}State(
    (state) => [state.${meta.ui.modes.create ? `add${names.modelName}, ` : ''}${
    meta.ui.modes.update ? `state.update${names.modelName}, ` : ''
  }state.setFormLoading],
    shallow
  );

  useEffect(() => {
    setFormLoading(loading);
  }, [loading]);
${formContent}
${createContent}
${editContent}
  return { form, mode, ${typeList.has('File') ? 'progress, ' : ''}loading${
    canCreate ? `, create${names.modelName}` : ''
  }${canUpdate ? `, edit${names.modelName}` : ''} }
};
  `;
};
