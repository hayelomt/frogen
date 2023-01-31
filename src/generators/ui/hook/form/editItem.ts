import { parseModelName } from '../../../../utils/text';
import { getFieldList } from '../../../../utils/tools';
import { FormMeta } from '../../../../utils/types';

export const generateFormDataEdit = (meta: FormMeta): string => {
  const name = parseModelName(meta.model);
  const fields = getFieldList(meta);
  const dateFields = fields
    .filter((i) => i.type === 'date')
    .map((i) => i.fieldName);

  return `
  const edit${name.modelName} = async (payload: ${name.modelName}Dto) => {
    const parsedPayload = FormParser.init(payload).parseDateFields(${JSON.stringify(
      dateFields
    )}).data;
    const formData = FormService.parseFormData(parsedPayload);
    const { data, error, mode } = await upload<${name.modelName}>(
      \`${meta.api.endpoints.update}/\${instance!.id}?_method=PATCH\`,
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

    update${name.modelName}(data);
    form.reset();
    toastSuccess({ title: '${name.label} updated' });
    onDone();
  };
  `;
};

export const generateDataEdit = (meta: FormMeta): string => {
  const name = parseModelName(meta.model);
  const fields = getFieldList(meta);
  const dateFields = fields
    .filter((i) => i.type === 'date')
    .map((i) => i.fieldName);

  return `
  const edit${name.modelName} = async (payload: ${name.modelName}Dto) => {
    const parsedPayload = FormParser.init(payload).parseDateFields(${JSON.stringify(
      dateFields
    )}).data;
    const { data, error, mode } = await sendData<${name.modelName}>(
      \`${meta.api.endpoints.update}/\${instance!.id}?_method=PATCH\`,
      {
        payload: parsedPayload,
        errorSetter: form.setFieldError,
      }
    );
    if (mode === 'error') {
      if (error.status !== 400) {
        toastError({ title: 'Form error', message: error.msg });
      }
      return;
    }

    update${name.modelName}(data);
    form.reset();
    toastSuccess({ title: '${name.label} updated' });
    onDone();
  };
  `;
};
