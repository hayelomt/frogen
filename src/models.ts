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

  news: {
    model: 'news',
    plural: {
      label: 'News',
      model: 'news',
      capital: 'News',
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
        create: 'auth-pragma23/news',
        delete: 'auth-pragma23/news',
        update: 'auth-pragma23/news',
        read: 'news',
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
          type: 'text',
          label: 'External Link',
          fieldName: 'external_link',
        },
      ],
      [
        {
          type: 'bool',
          label: 'Archived',
          fieldName: 'archived',
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
    ],
  },

  insight: {
    model: 'insight',
    plural: {
      label: 'Insight',
      model: 'insight',
      capital: 'Insight',
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
        create: 'auth-pragma23/insights',
        delete: 'auth-pragma23/insights',
        update: 'auth-pragma23/insights',
        read: 'insights',
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
          type: 'text',
          label: 'Type',
          fieldName: 'type',
        },
      ],
      [
        {
          type: 'date',
          label: 'Publish Date',
          fieldName: 'publish_date',
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
    ],
  },

  research: {
    model: 'research',
    plural: {
      label: 'Research',
      model: 'research',
      capital: 'Research',
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
        create: 'researches',
        delete: 'auth-pragma23/researches',
        update: 'auth-pragma23/researches',
        read: 'auth-pragma23/researches',
      },
    },
    fields: [
      [
        {
          type: 'varchar',
          label: 'Full Name',
          fieldName: 'fullname',
        },
        {
          type: 'varchar',
          label: 'Email',
          fieldName: 'email',
        },
      ],
      [
        {
          type: 'varchar',
          label: 'Country',
          fieldName: 'country',
        },
        {
          type: 'varchar',
          label: 'Type',
          fieldName: 'type',
        },
      ],
      [
        {
          type: 'text',
          label: 'Goal',
          fieldName: 'goal',
        },
      ],
      [
        {
          type: 'varchar',
          label: 'Organization name',
          fieldName: 'org_name',
        },
        {
          type: 'varchar',
          label: 'Sector',
          fieldName: 'sector',
        },
      ],
      [
        {
          type: 'varchar',
          label: 'Country of research',
          fieldName: 'country_of_research',
        },
        {
          type: 'varchar',
          label: 'Specific analysis',
          fieldName: 'specific_analysis',
        },
      ],
    ],
  },

  digest: {
    model: 'digest',
    plural: {
      label: 'Digest',
      model: 'digest',
      capital: 'Digest',
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
        create: 'auth-pragma23/digests',
        delete: 'auth-pragma23/digests',
        update: 'auth-pragma23/digests',
        read: 'digests',
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
          type: 'text',
          label: 'Type',
          fieldName: 'type',
        },
      ],
      [
        {
          type: 'date',
          label: 'Publish Date',
          fieldName: 'publish_date',
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
          label: 'Featured',
          fieldName: 'featured',
        },
      ],
    ],
  },

  join: {
    model: 'join',
    plural: {
      label: 'Join',
      model: 'join',
      capital: 'Join',
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
        create: 'joins',
        delete: 'auth-pragma23/joins',
        update: 'auth-pragma23/joins',
        read: 'auth-pragma23/joins',
      },
    },
    fields: [
      [
        {
          type: 'varchar',
          label: 'Full Name',
          fieldName: 'fullname',
        },
      ],
      [
        {
          type: 'varchar',
          label: 'Email',
          fieldName: 'email',
        },
        {
          type: 'varchar',
          label: 'Phone',
          fieldName: 'phone',
        },
      ],
      [
        {
          type: 'text',
          label: 'Cover letter',
          fieldName: 'coverletter',
        },
      ],
      [
        {
          type: 'File',
          label: 'Resume',
          fieldName: 'resume',
          collectionName: 'files',
        },
      ],
    ],
  },

  internship: {
    model: 'internship',
    plural: {
      label: 'Internship',
      model: 'internship',
      capital: 'Internship',
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
        create: 'internships',
        delete: 'auth-pragma23/internships',
        update: 'auth-pragma23/internships',
        read: 'auth-pragma23/internships',
      },
    },
    fields: [
      [
        {
          type: 'varchar',
          label: 'Full Name',
          fieldName: 'fullname',
        },
      ],
      [
        {
          type: 'varchar',
          label: 'Email',
          fieldName: 'email',
        },
        {
          type: 'varchar',
          label: 'Phone',
          fieldName: 'phone',
        },
      ],
      [
        {
          type: 'File',
          label: 'Resume',
          fieldName: 'resume',
          collectionName: 'files',
        },
      ],
      [
        {
          type: 'File',
          label: 'Cover Letter',
          fieldName: 'coverletter',
          collectionName: 'covers',
        },
      ],
      [
        {
          type: 'File',
          label: 'Grade Report',
          fieldName: 'grade_report',
          collectionName: 'grade',
        },
      ],
      [
        {
          type: 'File',
          label: 'College Cover Letter',
          fieldName: 'college_coverletter',
          collectionName: 'collegecover',
          optional: true,
        },
      ],
    ],
  },

  project: {
    model: 'project',
    plural: {
      label: 'Project',
      model: 'project',
      capital: 'Project',
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
        create: 'auth-pragma23/projects',
        delete: 'auth-pragma23/projects',
        update: 'auth-pragma23/projects',
        read: 'projects',
      },
    },
    fields: [
      [
        {
          type: 'varchar',
          label: 'Title',
          fieldName: 'title',
        },
      ],
      [
        {
          type: 'varchar',
          label: 'Highlight Figure',
          fieldName: 'highlight_figure',
        },
      ],
      [
        {
          type: 'text',
          label: 'Description',
          fieldName: 'description',
        },
      ],
    ],
  },

  signup: {
    model: 'signup',
    plural: {
      label: 'Signup',
      model: 'signup',
      capital: 'Signup',
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
        create: 'signups',
        delete: 'auth-pragma23/signups',
        update: 'auth-pragma23/signups',
        read: 'auth-pragma23/signups',
      },
    },
    fields: [
      [
        {
          type: 'varchar',
          label: 'Full Name',
          fieldName: 'fullname',
        },
      ],
      [
        {
          type: 'varchar',
          label: 'Email',
          fieldName: 'email',
        },
        {
          type: 'varchar',
          label: 'Organization Type',
          fieldName: 'org_type',
        },
      ],
      [
        {
          type: 'varchar',
          label: 'Occupation',
          fieldName: 'occupation',
        },
        {
          type: 'varchar',
          label: 'Subject',
          fieldName: 'subject',
        },
      ],
      [
        {
          type: 'text',
          label: 'Message',
          fieldName: 'message',
        },
      ],
    ],
  },

  team: {
    model: 'team',
    plural: {
      label: 'Team',
      model: 'teams',
      capital: 'Team',
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
        create: 'auth-pragma23/teams',
        delete: 'auth-pragma23/teams',
        update: 'auth-pragma23/teams',
        read: 'teams',
      },
    },
    fields: [
      [
        {
          type: 'varchar',
          label: 'Title',
          fieldName: 'title',
        },
      ],
    ],
  },

  teammember: {
    model: 'team-member',
    plural: {
      label: 'Team Members',
      model: 'teamMembers',
      capital: 'TeamMembers',
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
        create: 'auth-pragma23/team-members',
        delete: 'auth-pragma23/team-members',
        update: 'auth-pragma23/team-members',
        read: 'team-members',
      },
    },
    fields: [
      [
        {
          type: 'varchar',
          label: 'Name',
          fieldName: 'name',
        },
        {
          type: 'varchar',
          label: 'Email',
          fieldName: 'email',
        },
      ],
      [
        {
          type: 'dropdown',
          label: 'Team',
          fieldName: 'team_id',
          selectOptions: [],
        },
      ],
      [
        {
          type: 'varchar',
          label: 'Twitter',
          fieldName: 'twitter',
          optional: true,
        },
        {
          type: 'varchar',
          label: 'LinkedIn',
          fieldName: 'linkedin',
          optional: true,
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
    ],
  },
};
