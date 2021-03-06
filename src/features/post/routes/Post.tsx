import { Button } from "@/components/button";
import { PostCard } from "@/features/posts/components/PostCard";
import usePost from "@/lib/api/usePost";
import { InfoProps, PostParams } from "@/shared/types/api-types";
import { css } from "@emotion/css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const EmptyStatePost: React.FC<{ id: string } & InfoProps> = (props) => {
  const { id } = props;
  const { status, data, error } = usePost(id);
  const navigator = useNavigate();

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  if (!data) return <p>No data</p>;

  return (
    <div className={postOuterRootStyle}>
      <PostCard {...data} disabled message={props.message} />
      <Button onClick={() => navigator(-1)}>{"< Back"}</Button>
    </div>
  );
};

export const Post: React.FC<InfoProps> = (props) => {
  console.log(`${props.message} ${Post.displayName}`);

  const { id } = useParams();
  const location = useLocation();
  const navigator = useNavigate();
  const state = location.state as PostParams;

  if (!state) {
    return <EmptyStatePost id={id ? id : "0"} message={props.message} />;
  }

  return (
    <div className={postOuterRootStyle}>
      <PostCard {...state} disabled message={props.message} />
      <Button onClick={() => navigator(-1)}>{"< Back"}</Button>
    </div>
  );
};

Post.displayName = "Post";

const postOuterRootStyle = css`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`;
