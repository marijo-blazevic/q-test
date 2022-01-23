import { PostParams } from "./../../shared/types/api-types";
import axios from "axios";
import { useQuery } from "react-query";

const usePosts = () => {
  return useQuery<PostParams[]>("posts", async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20"
    );
    return data;
  });
};

export default usePosts;
