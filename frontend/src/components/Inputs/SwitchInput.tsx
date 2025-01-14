import { forwardRef } from "react";
import Switch from "react-switch";

type Props = {
  ref: any;
  name?: string;
  label: string;
  onChange: any;
  checked: boolean;
};

const SwitchInput = forwardRef(
  ({ name, label, onChange, checked }: Props, ref: any) => {
    const onChangeHandler = (e: any) => {
      onChange(e);
      console.log(e);
      console.log(checked);
    };

    return (
      <label className="flex items-center">
        <span className="text-[16px] font-regular mr-4">{label}</span>
        <Switch
          ref={ref}
          onChange={onChangeHandler}
          checked={checked}
          name={name}
          width={50}
          height={25}
          handleDiameter={23}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#6E62E5"
        />
      </label>
    );
  }
);

export default SwitchInput;
