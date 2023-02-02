import { FormMeta } from './utils/types';

export const models: Record<string, FormMeta> = {
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
        '/media/ht/OS/Users/DeLL/Documents/code/test/frogen-templates/admin',
    },
    api: {
      baseFolderPath:
        '/media/ht/OS/Users/DeLL/Documents/code/test/frogen-templates/api',
      controllerMode: 'multi',
      phpCommand: '/opt/lampp/bin/php',
      endpoints: {
        create: 'auth-route/press',
        delete: 'auth-route/press',
        update: 'auth-route/press',
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
};
