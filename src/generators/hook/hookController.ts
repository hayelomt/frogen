import { parseModelName } from '../../utils/text';
import { getCorePrefix } from '../../utils/tools';
import { FormMeta } from '../../utils/types';
import { generateHookForm } from './hookForm';

export const generateHook = (curDir: string, meta: FormMeta): string => {
  const names = parseModelName(meta.model);
  const corePrefix = getCorePrefix(curDir, meta.ui.baseFolderPath);

  const formContent = generateHookForm(meta);

  return `import { useForm } from '@mantine/form';
import { useState } from 'react';
import { ${names.modelName}, ${names.modelName}Dto } from '../models/${names.camelName}';
import ${names.modelName}Service from '../services/${names.camelName}Service';

export const use${names.modelName}FormController = () => { 
  const [loading, setLoading] = useState(false);
${formContent}
  return { form, loading }
};
  `;
};
