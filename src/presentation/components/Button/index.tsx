import { StyledButton } from "./styles";
import { ButtonProps } from "../../../models/components/Button";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
}

type MyProps = ButtonProps & Props;

const Button: React.FC<MyProps> = ({
  backgroundColor,
  hoverColor,
  children,
}) => (
  <StyledButton backgroundColor={backgroundColor} hoverColor={hoverColor}>
    {children}
  </StyledButton>
);

export default StyledButton;
