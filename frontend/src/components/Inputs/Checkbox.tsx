import { useState } from "react";

type Props = {
  label: string;
  name: string;
};

const Checkbox = ({ label, name }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = (e: any) => {
    setIsClicked((prev) => !prev);
    console.log(e);
  };

  return (
    <div className="relative my-2 ">
      <label
        className={`cursor-pointer absolute px-4 py-2 rounded-[10px] border ${
          isClicked && "text-[#6E62E5] border-[#6E62E5]"
        }`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type="checkbox"
        id={name}
        name={name}
        className="hidden"
        onChange={toggleClick}
      />
    </div>
  );
};

export default Checkbox;
