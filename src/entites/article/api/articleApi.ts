import { axiosInstance } from "@/shared/api";
import { Article } from "../model";

export const getArticlesApi = async (params: {
  _page?: number;
  _per_page?: number;
  title_like?: string;
}) => {
  const response = await axiosInstance.get("articles", { params });

  return {
    data: response.data,
    total: Number(response.headers["x-total-count"]),
  };
};

export const addArticleApi = async (article: Omit<Article, "id">) => {
  const response = await axiosInstance.post<Article>("articles", article);
  return response.data;
};

export const editArticleApi = async (article: Article) => {
  const respose = await axiosInstance.put<Article>(
    `articles/${article.id}`,
    article
  );
  return respose.data;
};

export const deleteArticleApi = async (id: string) => {
  await axiosInstance.delete(`articles/${id}`);
};
