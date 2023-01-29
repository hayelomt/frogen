import { FormMeta } from './utils/types';

export const models: Record<string, FormMeta> = {
  client: {
    model: 'client',
    plural: {
      label: 'Clients',
      model: 'clients',
      capital: 'Clients',
    },
    ui: {
      modes: {
        create: true,
        delete: true,
        update: true,
      },
      parentFolder: 'meta',
      baseFolderPath:
        '/media/ht/OS/Users/DeLL/Documents/Projects/mad/pragma/prgama-admin',
    },
    api: {
      baseFolderPath:
        '/media/ht/OS/Users/DeLL/Documents/Projects/mad/pragma/pragma-api',
      controllerMode: 'multi',
      phpCommand: '/opt/lampp/bin/php',
      endpoints: {
        create: 'auth-pragma23/clients',
        delete: 'auth-pragma23/clients',
        update: 'auth-pragma23/clients',
        read: 'clients',
      },
    },
    fields: [
      // [
      //   {
      //     type: 'varchar',
      //     label: 'First Name',
      //     fieldName: 'first_name',
      //   },
      //   {
      //     type: 'varchar',
      //     label: 'Last Name',
      //     fieldName: 'last_name',
      //   },
      // ],
      // [
      //   {
      //     type: 'text',
      //     label: 'Email',
      //     fieldName: 'email',
      //   },
      // ],
      // [
      //   {
      //     type: 'varchar',
      //     label: 'Address',
      //     fieldName: 'address',
      //     optional: true,
      //   },
      //   {
      //     type: 'number',
      //     label: 'Height',
      //     fieldName: 'height',
      //     nonEditable: true,
      //   },
      // ],
      // [
      //   {
      //     type: 'bool',
      //     label: 'Accept terms and conditions',
      //     fieldName: 'term_accepted',
      //     nonEditable: true,
      //   },
      // ],
      // [
      //   {
      //     type: 'date',
      //     label: 'Birth Date',
      //     fieldName: 'birth_date',
      //     nonEditable: true,
      //   },
      // ],
      // [
      //   {
      //     type: 'dropdown',
      //     label: 'Select Machine',
      //     fieldName: 'machine',
      //     nonEditable: true,
      //     selectOptions: [
      //       { label: 'Cont', value: 'construction' },
      //       { label: 'Machine', value: 'heavy_machine' },
      //     ],
      //   },
      // ],
      // [
      //   {
      //     type: 'varchar',
      //     label: 'Title',
      //     fieldName: 'title',
      //   },
      // ],
      // [
      //   {
      //     type: 'varchar',
      //     label: 'Highlight',
      //     fieldName: 'highlight_figure',
      //   },
      // ],
      // [
      //   {
      //     type: 'text',
      //     label: 'Description',
      //     fieldName: 'description',
      //   },
      // ],
      [
        {
          type: 'varchar',
          label: 'Link',
          fieldName: 'link',
        },
      ],
      [
        {
          type: 'File',
          label: 'Image',
          fieldName: 'image',
          fileType: 'image',
          collectionName: 'images',
        },
      ],
      // [
      //   {
      //     type: 'File',
      //     label: 'CV',
      //     fieldName: 'cv',
      //   },
      // ],
    ],
  },
};
