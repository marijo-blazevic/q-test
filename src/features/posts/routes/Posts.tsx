import usePosts from "@/lib/api/usePosts";
import { InfoProps, PostParams } from "@/shared/types/api-types";
import { css } from "@emotion/css";
import { PostCard } from "../components/PostCard";
import { UserSearchBar } from "@/features/post/components/UserSearchBar";
import { useEffect, useState } from "react";

export const Posts: React.FC<InfoProps> = (props) => {
  console.log(`${props.message} ${Posts.displayName}`);

  const { status, data, error } = usePosts();
  const [filteredUsers, setFilteredUsers] = useState<number[] | undefined>([]);
  const [posts, setPosts] = useState<PostParams[] | undefined>(data);

  useEffect(() => {
    setPosts(data?.filter((post) => filteredUsers?.includes(post.userId)));
  }, [data, filteredUsers]);

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  if (!data) return <p>Error...</p>;

  return (
    <div>
      <UserSearchBar
        users={data.map((d) => d.userId)}
        handleFilteredUserData={setFilteredUsers}
      />
      <div className={postsRootStyle}>
        {posts?.length ? (
          posts?.map((post: PostParams) => (
            <PostCard key={post.id} {...post} message={props.message} />
          ))
        ) : (
          <p>No posts...</p>
        )}
      </div>
    </div>
  );
};

Posts.displayName = "Posts";

const postsRootStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  flex-wrap: wrap;
  gap: 1rem;
`;
