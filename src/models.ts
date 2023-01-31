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
      parentFolder: '',
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

  press: {
    model: 'press',
    plural: {
      label: 'Press',
      model: 'press',
      capital: 'Press',
    },
    ui: {
      modes: {
        create: true,
        delete: true,
        update: true,
      },
      parentFolder: '',
      baseFolderPath:
        '/media/ht/OS/Users/DeLL/Documents/Projects/mad/pragma/prgama-admin',
    },
    api: {
      baseFolderPath:
        '/media/ht/OS/Users/DeLL/Documents/Projects/mad/pragma/pragma-api',
      controllerMode: 'multi',
      phpCommand: '/opt/lampp/bin/php',
      endpoints: {
        create: 'auth-pragma23/press',
        delete: 'auth-pragma23/press',
        update: 'auth-pragma23/press',
        read: 'press',
      },
    },
    fields: [
      [
        {
          type: 'varchar',
          label: 'Title',
          fieldName: 'title',
        },
        {
          type: 'varchar',
          label: 'Category',
          fieldName: 'category',
        },
      ],
      [
        {
          type: 'text',
          label: 'Preview Text',
          fieldName: 'preview_text',
        },
      ],
      [
        {
          type: 'date',
          label: 'Publish Date',
          fieldName: 'publish_date',
        },
        {
          type: 'bool',
          label: 'Featured',
          fieldName: 'featured',
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
      [
        {
          type: 'File',
          label: 'Video',
          fieldName: 'video',
          collectionName: 'files',
        },
      ],
      [
        {
          type: 'bool',
          label: 'Archived',
          fieldName: 'archived',
        },
      ],
    ],
  },
  subscription: {
    model: 'subscription',
    plural: {
      label: 'Subscription',
      model: 'subscription',
      capital: 'Subscription',
    },
    ui: {
      modes: {
        create: false,
        delete: true,
        update: false,
      },
      parentFolder: '',
      baseFolderPath:
        '/media/ht/OS/Users/DeLL/Documents/Projects/mad/pragma/prgama-admin',
    },
    api: {
      baseFolderPath:
        '/media/ht/OS/Users/DeLL/Documents/Projects/mad/pragma/pragma-api',
      controllerMode: 'multi',
      phpCommand: '/opt/lampp/bin/php',
      endpoints: {
        create: 'subscription',
        delete: 'auth-pragma23/subscriptions',
        update: 'auth-pragma23/subscriptions',
        read: 'auth-pragma23/subscriptions',
      },
    },
    fields: [
      [
        {
          type: 'varchar',
          label: 'Email',
          fieldName: 'email',
        },
      ],
    ],
  },
};
