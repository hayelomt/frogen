import fs from 'fs';
import path from 'path';

export const generateUiFolders = (baseDir: string) => {
  if (fs.existsSync(baseDir)) {
    fs.rmSync(baseDir, { recursive: true, force: true });
  }
  fs.mkdirSync(baseDir, { recursive: true });

  const folders = [
    'components',
    'containers',
    'lib',
    'lib/hooks',
    'lib/states',
    'lib/models',
    'lib/services',
    'lib/types',
    'pages',
  ];

  folders.forEach((folder) => {
    fs.mkdirSync(path.join(baseDir, folder));
  });
  console.log(`Ui Folders generated`.green);
};
