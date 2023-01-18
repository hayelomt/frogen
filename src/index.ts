import { generateUi } from './runner/ui-runner';
import { FormMeta } from './utils/types';
import 'colors';

const meta: FormMeta = {
  model: 'team-member',
  ui: {
    modes: {
      create: true,
      delete: false,
      update: false,
    },
    parentFolder: 'academic/marklist',
    baseFolderPath:
      '/media/ht/OS/Users/DeLL/Documents/Projects/mad/pragma/prgama-admin',
  },
  api: {
    endpoints: {
      create: 'team-members',
    },
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
    [
      {
        type: 'varchar',
        label: 'Address',
        fieldName: 'address',
        optional: true,
      },
      {
        type: 'number',
        label: 'Height',
        fieldName: 'height',
      },
    ],
    [
      {
        type: 'File',
        label: 'Image',
        fieldName: 'image',
      },
    ],
  ],
};

console.log('🚀 Started template generation...');
generateUi(meta);
