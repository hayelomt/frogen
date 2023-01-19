import { parseModelName } from '../../utils/text';
import { FormMeta } from '../../utils/types';

export const generateFormDataCreator = (meta: FormMeta): string => {
  const name = parseModelName(meta.model);

  return `
  const create${name.modelName} = async (payload: ${name.modelName}Dto) => {
    const parsedPayload = FormParser.init(payload).data;
    const formData = FormService.parseFormData(parsedPayload);
    const { data, error, mode } = await upload<${name.modelName}>(
      '${meta.api.endpoints.create}',
      {
        payload: formData,
        errorSetter: form.setFieldError,
      }
    );
    if (mode === 'error') {
      if (error.status !== 400) {
        toastError({ title: 'Form error', message: error.msg });
      }
      return;
    }

    form.reset();
    toastSuccess({ title: '${name.label} added' });
  };
  `;
};

export const generateDataCreator = (meta: FormMeta): string => {
  const name = parseModelName(meta.model);

  return `
  const create${name.modelName} = async (payload: ${name.modelName}Dto) => {
    const parsedPayload = FormParser.init(payload).data;
    const formData = FormService.parseFormData(parsedPayload);
    const { data, error, mode } = await upload<${name.modelName}>(
      '${meta.api.endpoints.create}',
      {
        payload: formData,
        errorSetter: form.setFieldError,
      }
    );
    if (mode === 'error') {
      if (error.status !== 400) {
        toastError({ title: 'Form error', message: error.msg });
      }
      return;
    }

    form.reset();
    toastSuccess({ title: '${name.label} added' });
  };
  `;
};
