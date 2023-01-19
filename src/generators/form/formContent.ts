import { parseModelName } from '../../utils/text';
import { parseTypeList } from '../../utils/tools';
import { FormMeta } from '../../utils/types';
import { generateFormBody } from './formBody';

const getImports = (meta: FormMeta) => {
  const imports: string[] = [];
  const typeList = parseTypeList(meta);

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
  if (typeList.has('File')) {
    imports.push('FileInput');
    imports.push('Progress');
    imports.push('Box');
  }

  return imports.join(', ');
};

const getDateImport = (meta: FormMeta) => {
  const typeList = parseTypeList(meta);

  return typeList.has('date')
    ? `\nimport { DatePicker } from '@mantine/dates';`
    : '';
};

const getFileIconImport = (meta: FormMeta) => {
  const typeList = parseTypeList(meta);

  return typeList.has('File')
    ? `\nimport { IconUpload } from '@tabler/icons';`
    : '';
};

export const generateForm = (meta: FormMeta) => {
  const name = parseModelName(meta.model);
  const formBody = generateFormBody(meta);
  const importList = getImports(meta);
  const typeList = parseTypeList(meta);

  return `import { Button, Grid, Drawer, Group, ${importList} } from '@mantine/core';${getDateImport(
    meta
  )}${getFileIconImport(meta)}
import { use${name.modelName}FormController } from '../lib/hooks/use${
    name.modelName
  }FormController';

type ${name.modelName}FormProps = {
  formOpen: boolean;
  onClose: () => void;
};

const ${name.modelName}Form = ({ formOpen, onClose }: ${
    name.modelName
  }FormProps) => {
  const { form, mode, create${name.modelName}, loading${
    typeList.has('File') ? ', progress' : ''
  } } = use${name.modelName}FormController();

  return (
    <>
${formBody}
    </>
  );
};

export default ${name.modelName}Form;
`;
};
