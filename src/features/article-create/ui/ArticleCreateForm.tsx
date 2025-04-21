import { Button, Input, Textarea } from "@/shared/ui";
import { useArticleCreate } from "../model";

export const ArticleCreateForm = () => {
  const { title, body, setTitle, setBody, onSubmit } = useArticleCreate();

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button type="submit">Create</Button>
    </form>
  );
};
