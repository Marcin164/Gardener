import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon?: IconProp;
  text: string;
  onClick: any;
};

const Button = ({ icon, text, onClick }: Props) => {
  return (
    <button
      className="px-4 py-2 border border-[#303030] text-[#303030] rounded-[10px]"
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      <span className="pl-2">{text}</span>
    </button>
  );
};

export default Button;
