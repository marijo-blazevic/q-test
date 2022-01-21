import { Button } from "@/components/button";
import { PostCard } from "@/features/posts/components/PostCard";
import usePost from "@/lib/api/usePost";
import { PostParams } from "@/shared/types/api-types";
import { css } from "@emotion/css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const EmptyStatePost: React.FC<{ id: string }> = (props) => {
  const { id } = props;
  const { status, data, error } = usePost(id);
  const navigator = useNavigate();

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  if (!data) return <p>No data</p>;

  return (
    <div className={postOuterRootStyle}>
      <PostCard {...data} disabled />
      <Button onClick={() => navigator(-1)}>{"< Back"}</Button>
    </div>
  );
};

export const Post: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigator = useNavigate();
  const state = location.state as PostParams;

  if (!state) {
    return <EmptyStatePost id={id ? id : "0"} />;
  }

  return (
    <div className={postOuterRootStyle}>
      <PostCard {...state} disabled />
      <Button onClick={() => navigator(-1)}>{"< Back"}</Button>
    </div>
  );
};

const postOuterRootStyle = css`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`;
