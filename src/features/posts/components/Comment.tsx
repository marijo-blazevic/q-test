import { h6Style, p2Style } from "@/components/styles/text";
import { CommentsParams } from "@/shared/types/api-types";
import { css } from "@emotion/css";

export const Comment: React.FC<CommentsParams> = (props) => {
  const { email, body } = props;

  return (
    <div className={commentContainerStyle}>
      <h6 className={h6Style}>{email}</h6>
      <p className={commentBodyStyle}>{body}</p>
    </div>
  );
};

const commentContainerStyle = css`
  margin-top: 0.6rem;
`;

const commentBodyStyle = css`
  ${p2Style}
  margin-top: 0.3rem;
`;
