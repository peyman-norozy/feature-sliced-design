import { Article } from "./types";
import articleReducer, { setPage, setSearchQuery } from "./articleSlice";
import { getArticles, addArticle, deleteArticle, editArticle } from "./thunks";

export type { Article };
export {
  addArticle,
  getArticles,
  deleteArticle,
  editArticle,
  articleReducer,
  setPage,
  setSearchQuery,
};
