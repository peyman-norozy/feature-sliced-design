import { Button, Input } from "@/shared/ui";
import { useArticleSearch } from "../model";
import { X } from "lucide-react";

export const ArticleSearch = () => {
  const { search, setSearch } = useArticleSearch();

  return (
    <div className="relative w-full">
      <Input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pr-10"
      />
      {search && (
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => setSearch("")}
          className="absolute right-1 top-1/2 -translate-y-1/2 to-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};
