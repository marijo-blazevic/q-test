import { CommentsParams } from "../../shared/types/api-types";
import axios from "axios";
import { useQuery } from "react-query";

const getCommentsByPostId = async (postId: number) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId.toString()}`
  );
  return data;
};

const useComments = (postId: number) => {
  return useQuery<CommentsParams[]>(
    ["comments", postId],
    () => getCommentsByPostId(postId),
    {
      enabled: false,
    }
  );
};

export default useComments;
