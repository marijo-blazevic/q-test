import { css, cx } from "@emotion/css";
import { Colors } from "../styles/colors";

type TextInputProps = {
  onChange: (text: string) => void;
  placeholder?: string;
  className?: string;
};

export const TextInput: React.FC<TextInputProps> = (props) => {
  const { onChange, placeholder, className } = props;
  return (
    <input
      type={"text"}
      onChange={(v) => onChange(v.target.value)}
      defaultValue={""}
      className={cx(className, TextInputStyle)}
      placeholder={placeholder}
    />
  );
};

const TextInputStyle = css`
  height: 2.2rem;
  width: 100%;
  border-radius: 0.25rem;
  display: inline-block;
  box-sizing: border-box;
  padding: 0.5rem;
  border: 1px solid ${Colors.DIVIDER};
`;
