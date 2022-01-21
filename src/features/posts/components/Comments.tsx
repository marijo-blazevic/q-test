import { h6Style, p2Style } from "@/components/styles/text";
import useComments from "@/lib/api/useComments";
import { Comment } from "./Comment";

type CommentsParams = {
  postId: number;
};

export const Comments: React.FC<CommentsParams> = (props) => {
  const { postId } = props;
  const { status, data, error } = useComments(postId);

  if (status === "loading") return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div>
      <p className={h6Style}>
        Comments: <span className={p2Style}>({data?.length})</span>
      </p>
      <br />
      {data?.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};
