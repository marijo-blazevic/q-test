import { Colors } from "@/components/styles/colors";
import { h4Style, p1Style } from "@/components/styles/text";
import { UserInfo } from "@/features/post/components/UserInfo";
import { PostParams } from "@/shared/types/api-types";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";
import { Comments } from "./Comments";

type PostCardProps = PostParams & {
  disabled?: boolean;
};

export const PostCard: React.FC<PostCardProps> = (props) => {
  const { userId, title, body, id, disabled } = props;
  const navigate = useNavigate();
  return (
    <div
      className={postCardOuterRootStyle(disabled ? true : false)}
      onClick={() =>
        !disabled &&
        navigate("/post/" + id, {
          state: {
            userId: userId,
            title: title,
            body: body,
            id: id,
          },
        })
      }
    >
      <UserInfo userId={userId.toString()} />
      <h4 className={postTitleStyle}>{title}</h4>
      <p className={postBodyStyle}>{body}</p>
      <Comments postId={id} />
    </div>
  );
};

const postTitleStyle = css`
  ${h4Style}
  text-transform: capitalize;
  margin: 0.75rem 0rem;
`;

const postBodyStyle = css`
  ${p1Style}
  text-transform: capitalize;
  margin-bottom: 0.75rem;
`;

const postCardOuterRootStyle = (disabled: boolean) => css`
  background-color: ${Colors.WHITE};
  padding: 1rem;
  min-height: 14rem;
  min-width: 15rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem ${Colors.DIVIDER};
  ${
    !disabled &&
    css`
      cursor: pointer;
      transition: all 0.1s;
      :hover {
        transform: scale(1.01);
      }
    `
  }'
  
  
`;
