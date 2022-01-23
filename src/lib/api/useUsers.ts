import { UserParams } from "../../shared/types/api-types";
import axios from "axios";
import { useQuery } from "react-query";
import qs from "qs";

const getUserById = async (id: number[]) => {
  const parsed = qs.stringify({ userId: [...id] });
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users?${parsed}`
  );
  return data;
};

const useUsers = (usersId: number[]) => {
  return useQuery<UserParams[]>(
    ["users", usersId],
    () => getUserById(usersId),
    {
      enabled: !!usersId,
    }
  );
};

export default useUsers;
