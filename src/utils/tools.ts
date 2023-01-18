import path from 'path';

export const getCorePrefix = (curDir: string, baseUiDir: string): string => {
  const tokens = curDir
    .replace(baseUiDir, '')
    .split(path.sep)
    .filter((i) => i !== '');

  const corePrefix = Array(tokens.length - 1)
    .fill(null)
    .map((_) => '../')
    .join('');

  return corePrefix;
};
