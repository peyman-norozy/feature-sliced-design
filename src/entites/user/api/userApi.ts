import { axiosInstance } from "@/shared/api";
import { User } from "../model";

export const loginUser = async (
  email: string,
  password: string
): Promise<User> => {
  const res = await axiosInstance.get<User[]>("/users", {
    params: { email, password },
  });
  const user = res.data[0];
  if (!user) throw new Error("Wrong email or password");

  return user;
};
