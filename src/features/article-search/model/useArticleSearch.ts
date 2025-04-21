import { AppDispatch, RootState } from "@/app/stores/mainStore";
import { getArticles, setSearchQuery } from "@/entites/article/model";
import { useDebounce } from "@/shared/lib";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useArticleSearch = () => {
  const dispatch: AppDispatch = useDispatch();
  const globalSearch = useSelector(
    (state: RootState) => state.article.searchQuery
  );
  const [localSearch, setLocalSearch] = useState(globalSearch);
  const debouncedSearch = useDebounce(localSearch, 300);

  useEffect(() => {
    dispatch(setSearchQuery(debouncedSearch));
    dispatch(getArticles({ searchQuery: debouncedSearch }));
  }, [dispatch, debouncedSearch]);

  return {
    search: localSearch,
    setSearch: setLocalSearch,
  };
};
