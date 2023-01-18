import { parseModelName } from '../../utils/text';
import { FormMeta } from '../../utils/types';
import { generateFormBody } from './formBody';

const getImports = (meta: FormMeta) => {
  const imports: string[] = [];
  const typeList = new Set(
    meta.fields
      .map((row) => row.map((i) => i.type))
      .reduce((a, b) => a.concat(b), [])
  );

  if (typeList.has('varchar') || typeList.has('number')) {
    imports.push('TextInput');
  }
  if (typeList.has('text')) {
    imports.push('Textarea');
  }
  if (typeList.has('bool')) {
    imports.push('Switch');
  }
  if (typeList.has('dropdown')) {
    imports.push('Select');
  }

  return imports.join(', ');
};

export const generateForm = (meta: FormMeta) => {
  const name = parseModelName(meta.model);
  const formBody = generateFormBody(meta);
  const importList = getImports(meta);

  return `import { Button, Grid, Group, ${importList} } from '@mantine/core';
import { use${name.modelName}FormController } from '../lib/hooks/use${name.modelName}FormController';

type ${name.modelName}FormProps = {
  onClose: () => void;
};

const ${name.modelName}Form = ({ onClose }: ${name.modelName}FormProps) => {
  const { form, mode, create${name.modelName}, loading } = use${name.modelName}FormController();

  return (
    <>
${formBody}
    </>
  );
};

export default ${name.modelName}Form;
`;
};
