import { forwardRef } from "react";

type Props = {
  name: string;
  label: string;
  value?: any;
  onBlur?: any;
  onChange?: any;
  unit?: string;
  inputClassName?: string;
  type?: string;
};

const Input = forwardRef(
  (
    {
      name,
      label,
      value,
      onBlur,
      onChange,
      unit,
      inputClassName = "",
      type = "text",
    }: Props,
    ref: any
  ) => {
    return (
      <div className="py-2">
        <label className="pl-2 font-medium">{label}</label>
        <div className="flex">
          <input
            ref={ref}
            name={name}
            type={type}
            className={`w-full h-[40px] border px-2 ${inputClassName} ${
              unit ? "rounded-l-[10px]" : "rounded-[10px]"
            }`}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
          />
          {unit && (
            <div className="bg-[#E5E5E5] px-2 rounded-r-[10px] border flex justify-center items-center">
              <span>{unit}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
