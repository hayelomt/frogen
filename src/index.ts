import { generateUi } from './runner/ui-runner';
import { FormMeta } from './utils/types';
import 'colors';

const meta: FormMeta = {
  model: 'TeamMember',
  ui: {
    parentFolder: 'academic/marklist',
    baseFolderPath:
      '/media/ht/OS/Users/DeLL/Documents/Projects/mad/pragma/prgama-admin',
  },
  fields: [
    [
      {
        type: 'varchar',
        label: 'First Name',
        fieldName: 'first_name',
      },
      {
        type: 'varchar',
        label: 'Last Name',
        fieldName: 'last_name',
      },
    ],
    [
      {
        type: 'varchar',
        label: 'Email',
        fieldName: 'email',
      },
    ],
  ],
};

console.log('🚀 Started template generation...');
generateUi(meta);
