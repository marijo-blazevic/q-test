import usePosts from "@/lib/api/usePosts";
import { TextInput } from "@/components/input/TextInput";
import { PostParams } from "@/shared/types/api-types";
import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import { PostCard } from "../components/PostCard";

export const Posts: React.FC = () => {
  const { status, data, error } = usePosts();
  const [filter, setFilter] = useState("");

  const [postsData, setPostsData] = useState<PostParams[] | undefined>(data);

  useEffect(() => {
    if (filter.length > 0) {
      setPostsData(
        data?.filter((posts) =>
          posts.title.toLowerCase().startsWith(filter.toLowerCase())
        )
      );
    } else {
      setPostsData(data);
    }
  }, [data, postsData, filter]);

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <TextInput
        onChange={(text) => setFilter(text)}
        placeholder="Search by users"
        className={css`
          margin-bottom: 1rem;
        `}
      />
      <div className={postsRootStyle}>
        {postsData?.map((post: PostParams) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

const postsRootStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  flex-wrap: wrap;
  gap: 1rem;
`;
