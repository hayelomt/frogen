import path from 'path';
import { FormMeta, FormMetaField } from './types';

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

export const parseTypeList = (meta: FormMeta) =>
  new Set(
    meta.fields
      .map((row) => row.map((i) => i.type))
      .reduce((a, b) => a.concat(b), [])
  );

export const getFieldList = (meta: FormMeta): FormMetaField[] =>
  meta.fields.reduce((a, b) => a.concat(b), []);

export const hasImage = (meta: FormMeta): boolean => {
  const types = new Set(
    meta.fields
      .map((row) => row.map((i) => i.fileType))
      .reduce((a, b) => a.concat(b), [])
  );

  return types.has('image');
};
