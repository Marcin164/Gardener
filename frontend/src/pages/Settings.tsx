import { Controller, useForm } from "react-hook-form";
import SwitchInput from "../components/Inputs/SwitchInput";

type Props = {};

const Settings = (props: Props) => {
  const { handleSubmit, control } = useForm<any>({
    defaultValues: {
      darkMode: false,
    },
  });

  const onSubmit = (value: any) => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="darkMode"
          render={({ field: { onChange, value, ref } }) => (
            <SwitchInput
              onChange={onChange}
              label="Dark mode"
              checked={value}
            />
          )}
        />
      </form>
    </div>
  );
};

export default Settings;
