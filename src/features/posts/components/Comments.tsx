import { Button } from "@/components/button";
import { Colors } from "@/components/styles/colors";
import { h6Style, p2Style } from "@/components/styles/text";
import useComments from "@/lib/api/useComments";
import { InfoProps } from "@/shared/types/api-types";
import { css } from "@emotion/css";
import { useState } from "react";
import { Comment } from "./Comment";

type CommentsParams = {
  postId: number;
};

export const Comments: React.FC<CommentsParams & InfoProps> = (props) => {
  console.log(`${props.message} ${Comments.displayName}`);
  const { postId } = props;
  const [open, setOpen] = useState(false);
  const { data, error, refetch } = useComments(postId);

  const handleOpen = () => {
    setOpen(!open);
    refetch();
  };

  if (error) return <div>Error...</div>;

  return (
    <div className={commentsRootContainerStyle}>
      <div className={commentsActionStyle}>
        <p className={h6Style}>
          Comments: <span className={p2Style}>({data?.length})</span>
        </p>
        <Button onClick={handleOpen}>{open ? "hide" : "show"}</Button>
      </div>
      {open &&
        data?.map((comment, index) => <Comment key={index} {...comment} />)}
    </div>
  );
};

Comments.displayName = "Comments";

const commentsActionStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const commentsRootContainerStyle = css`
  background-color: ${Colors.WHITE};
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  padding: 1rem;
`;
