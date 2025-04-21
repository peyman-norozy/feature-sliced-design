import { RootState } from "@/app/stores/mainStore";
import { ArticleCreateForm } from "@/features/article-create/ui";
import { ArticlePagination } from "@/features/article-pagination/ui/ArticlePagination";
import { ArticleSearch } from "@/features/article-search/ui";
import { ArticleList } from "@/widgets/articleList/ui";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Articles</h1>

      {user && (
        <div className="border p-4 rounded-3xl shadow">
          <h2 className="text-xl font-semibold mb-2">New Article</h2>
          <ArticleCreateForm />
        </div>
      )}
      <ArticleSearch />
      <ArticleList />
      <ArticlePagination />
    </div>
  );
};
