import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/stores/mainStore";
import { useNavigate } from "react-router-dom";
import { deleteArticle } from "@/entites/article/model";

export const useDeleteArticle = (id: string) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteArticle(id));
    navigate("/");
  };

  return { handleDelete };
};
