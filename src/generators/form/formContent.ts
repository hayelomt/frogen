import { parseModelName } from '../../utils/text';
import { FormMeta } from '../../utils/types';
import { generateFormBody } from './formBody';

export const generateForm = (meta: FormMeta) => {
  const name = parseModelName(meta.model);
  const formBody = generateFormBody(meta);

  return `import { Button, Grid, Group, TextInput } from '@mantine/core';
import { use${name.modelName}FormController } from '../lib/hooks/use${name.modelName}FormController';

type ${name.modelName}FormProps = {
  onClose: () => void;
};

const ${name.modelName}Form = ({ onClose }: ${name.modelName}FormProps) => {
  const { form, create${name.modelName}, loading } = use${name.modelName}FormController();

  return (
    <>
${formBody}
    </>
  );
};

export default ${name.modelName}Form;
`;
};
