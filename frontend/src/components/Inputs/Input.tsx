import { forwardRef } from "react";

type Props = {
  name: string;
  label: string;
  value?: any;
  onBlur: any;
  onChange: any;
};

const Input = forwardRef(
  ({ name, label, value, onBlur, onChange }: Props, ref: any) => {
    return (
      <div className="py-2">
        <label className="pl-2 font-medium">{label}</label>
        <input
          ref={ref}
          name={name}
          type="text"
          className="w-full h-[40px] border rounded-[10px] px-2"
          defaultValue={value}
          onBlur={onBlur}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default Input;
