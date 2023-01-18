import path from 'path';

const getTokenCount = (curDir: string, baseUiDir: string): number =>
  curDir
    .replace(baseUiDir, '')
    .split(path.sep)
    .filter((i) => i !== '').length;

export const getCorePrefix = (curDir: string, baseUiDir: string): string => {
  const corePrefix = Array(getTokenCount(curDir, baseUiDir) - 1)
    .fill(null)
    .map((_) => '../')
    .join('');

  return corePrefix;
};

export const getFeaturePrefix = (curDir: string, baseUiDir: string): string => {
  return Array(getTokenCount(curDir, baseUiDir) - 2)
    .fill(null)
    .map((_) => '../')
    .join('');
};
