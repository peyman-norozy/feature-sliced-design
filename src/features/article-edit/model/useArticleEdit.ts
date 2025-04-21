import { AppDispatch, RootState } from "@/app/stores/mainStore";
import { editArticle } from "@/entites/article/model";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export const useArticleEdit = () => {
  const { id } = useParams<{ id: string }>();

  const article = useSelector((state: RootState) =>
    state.article.articles.find((a) => a.id === id)
  );

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setBody(article.body);
    }
  }, [article]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title || !body) {
      toast.error("Fill all inputs");
      return;
    }

    dispatch(editArticle({ id: id ?? "", title, body }));

    toast.success("Change saved");
    navigate("/");
  };

  return {
    title,
    body,
    setTitle,
    setBody,
    onSubmit,
    isLoading: !article,
  };
};
