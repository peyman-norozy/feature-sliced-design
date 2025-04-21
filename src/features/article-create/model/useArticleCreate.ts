import { AppDispatch } from "@/app/stores/mainStore";
import { addArticle } from "@/entites/article/model";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export const useArticleCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !body) {
      toast.error("Fill all inputs");
      return;
    }

    dispatch(addArticle({ title, body }));

    setTitle("");
    setBody("");
  };

  return {
    title,
    body,
    setTitle,
    setBody,
    onSubmit,
  };
};
