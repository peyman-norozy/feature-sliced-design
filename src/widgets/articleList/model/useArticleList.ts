import { AppDispatch, RootState } from "@/app/stores/mainStore";
import { getArticles } from "@/entites/article/model";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useArticleList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { page, searchQuery, articles, isLoading } = useSelector(
    (state: RootState) => state.article
  );

  useEffect(() => {
    dispatch(getArticles({ page, searchQuery }));
  }, [dispatch, page, searchQuery]);

  return { articles, isLoading };
};
