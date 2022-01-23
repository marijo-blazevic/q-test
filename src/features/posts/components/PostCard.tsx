import { Colors } from "@/components/styles/colors";
import { h4Style, p1Style } from "@/components/styles/text";
import { UserInfo } from "@/features/post/components/UserInfo";
import { InfoProps, PostParams } from "@/shared/types/api-types";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";
import { Comments } from "./Comments";

type PostCardProps = PostParams & {
  disabled?: boolean;
};

export const PostCard: React.FC<PostCardProps & InfoProps> = (props) => {
  console.log(`${props.message} ${PostCard.displayName}`);

  const { userId, title, body, id, disabled } = props;
  const navigate = useNavigate();

  return (
    <div>
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
      </div>
      <Comments postId={id} message={props.message} />
    </div>
  );
};

PostCard.displayName = "PostCard";

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
  min-width: 15rem;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  /* box-shadow: 0 0 1rem ${Colors.DIVIDER}; */
  ${!disabled &&
  css`
    cursor: pointer;
    transition: all 0.1s;
    /* :hover { */
    /* transform: scale(1.01); */
    /* } */
  `}
`;
