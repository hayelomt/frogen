import { parseModelName } from '../../utils/text';
import { FormMeta } from '../../utils/types';

export const generateCreator = (meta: FormMeta): string => {
  const name = parseModelName(meta.model);

  return `
  const create${name.modelName} = async (payload: ${name.modelName}Dto) => {
    setLoading(true);
    const { data, error, mode } = await postApiData('${meta.api.endpoints.create}', payload, {
      validationHandler: (errors) =>
        ErrorParseService.parseValidation(errors, form.setFieldError),
      token,
    });
    setLoading(false);
    if (mode === 'error') {
      toastError({ title: 'Login error', message: error.msg });
      return;
    }

    form.reset();
    toastSuccess({ title: 'Team Member added' });
  };
  
  `;
};
