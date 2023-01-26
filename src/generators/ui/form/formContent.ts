import { parseModelName } from '../../../utils/text';
import { parseTypeList } from '../../../utils/tools';
import { FormMeta } from '../../../utils/types';
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

  return `import { Button, Grid, Group, ${importList} } from '@mantine/core';
import { shallow } from 'zustand/shallow';${getDateImport(
    meta
  )}${getFileIconImport(meta)}
import { use${name.modelName}FormController } from '../lib/hooks/use${
    name.modelName
  }FormController';
import use${meta.plural.capital}State from '../lib/states/use${
    meta.plural.capital
  }State';

type ${name.modelName}FormProps = {
  onClose: () => void;
};

const ${name.modelName}Form = ({ onClose }: ${name.modelName}FormProps) => {
  const [editable${name.modelName}, setEditable${name.modelName}] = use${
    meta.plural.capital
  }State(
    (state) => [state.editable${name.modelName}, state.setEditable${
    name.modelName
  }],
    shallow
  );
  const { form, mode, edit${name.modelName}, create${name.modelName}, loading${
    typeList.has('File') ? ', progress' : ''
  } } = use${name.modelName}FormController(() => {
      onClose();
      setEditable${name.modelName}(null);
    }, editable${name.modelName});

  return (
    <>
${formBody}
    </>
  );
};

export default ${name.modelName}Form;
`;
};
