import { ArticleEditForm } from "@/features/article-edit/ui";

export const ArticleEditPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit article</h1>
      <ArticleEditForm />
    </div>
  );
};
