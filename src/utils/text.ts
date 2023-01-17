export const titlify = (title: string) =>
  `${(title[0] || '').toUpperCase()}${(title || '')
    .substring(1)
    .toLowerCase()}`;

export const parseModelName = (model: string) => {
  const modelName = model.split('-').map(titlify).join('');
  const label = model.split('-').map(titlify).join(' ');
  const modelKey = model;
  const folderName = model.replace(/-/g, '');
  const camelName = `${modelName[0].toLocaleLowerCase()}${modelName.substring(
    1
  )}`;

  return {
    modelName,
    label,
    modelKey,
    folderName,
    camelName,
  };
};
