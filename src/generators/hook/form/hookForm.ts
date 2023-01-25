import { parseModelName } from '../../../utils/text';
import { FormMeta } from '../../../utils/types';

export const generateHookForm = (meta: FormMeta) => {
  const name = parseModelName(meta.model);

  return `  
  const form = useForm<${name.modelName}Dto>({
    initialValues: ${name.modelName}Service.initialize(instance),
    validate: ${name.modelName}Service.validation(mode),
  });
  `;
};
