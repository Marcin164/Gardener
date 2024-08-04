import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon?: IconProp;
  text: string;
  onClick?: any;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

const Button = ({
  icon,
  text,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: Props) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`px-4 py-2 border border-[#303030] text-[#303030] rounded-[10px] ${
        !disabled
          ? "border-[#303030] text-[#303030]"
          : "border-[#D8D8D8] text-[#D8D8D8]"
      } ${className}`}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} className="pr-2" />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
