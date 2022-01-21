import { PostParams } from "@/shared/types/api-types";
import axios from "axios";
import { useQuery } from "react-query";

const getPostById = async (id: string) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

const usePost = (postId: string) => {
  return useQuery<PostParams>(["post", postId], () => getPostById(postId), {
    enabled: !!postId,
  });
};

export default usePost;
