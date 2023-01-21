import { getFeaturePrefix } from '../../../utils/tools';
import { FormMeta } from '../../../utils/types';

export const generateLoadListController = (
  curDir: string,
  meta: FormMeta
): string => {
  const featurePrefix = getFeaturePrefix(curDir, meta.ui.baseFolderPath);

  return `
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { useToken } from '${featurePrefix}auth/lib/hooks/useToken';
import use${meta.plural.capital}State from '../states/use${meta.plural.capital}State';

export const useLoad${meta.plural.capital} = () => {
  const token = useToken();
  const [
    ${meta.plural.model},
    loading,
    fetch${meta.plural.capital},
    tableMeta,
    total,
    curPage,
    setCurPage,
    onSetRowsPerPage,
  ] = use${meta.plural.capital}State(
    (state) => [
      state.${meta.plural.model},
      state.loading,
      state.fetch${meta.plural.capital},
      state.tableMeta,
      state.total,
      state.curPage,
      state.setCurPage,
      state.onSetRowsPerPage,
    ],
    shallow
  );

  const handleFetch = () => fetch${meta.plural.capital}({ token });

  useEffect(() => {
    handleFetch();
  }, [tableMeta, curPage]);

  const onNext = () => setCurPage(curPage + 1);

  const onPrev = () => setCurPage(curPage - 1);

  return {
    ${meta.plural.model},
    handleFetch,
    loading,
    onNext,
    onPrev,
    setCurPage,
    curPage,
    total,
    tableMeta,
    onSetRowsPerPage,
  };
};

  `;
};
