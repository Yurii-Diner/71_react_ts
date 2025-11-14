import { ButtonComponent } from "./styles";
import type { ButtonProps } from "./types";


function Button({
  type = "button",
  name,
  onClick,
  disabled = false,
  isDanger
}: ButtonProps) {
  return (
    <ButtonComponent
      className="button"
      disabled={disabled}
      type={type}
      onClick={onClick}
      isDanger={isDanger}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;