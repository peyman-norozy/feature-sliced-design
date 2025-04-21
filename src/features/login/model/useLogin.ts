import { AppDispatch, RootState } from "@/app/stores/mainStore";
import { login, logout } from "@/entites/user/model";
import { useDispatch, useSelector } from "react-redux";

export const useLogin = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.user);

  const loginUser = (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return { loginUser, logoutUser, isLoading };
};
