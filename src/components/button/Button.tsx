import { css, cx } from "@emotion/css";
import { Colors } from "../styles/colors";

type ButtonProps = {
  onClick?(): void;
  children?: string;
  className?: string | undefined;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, children, className } = props;
  return (
    <button onClick={onClick} className={cx(className, buttonStyle)}>
      {children}
    </button>
  );
};

const buttonStyle = css`
  width: 100px;
  background: none;
  border: transparent;
  height: 2rem;
  background-color: ${Colors.WHITE};
  border-radius: 0.25rem;
  cursor: pointer;
`;
