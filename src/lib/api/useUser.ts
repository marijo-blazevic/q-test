import { UserParams } from "../../shared/types/api-types";
import axios from "axios";
import { useQuery } from "react-query";

const getUserById = async (id: string) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return data;
};

const useUser = (userId: string) => {
  return useQuery<UserParams>(["user", userId], () => getUserById(userId), {
    enabled: !!userId,
  });
};

export default useUser;
