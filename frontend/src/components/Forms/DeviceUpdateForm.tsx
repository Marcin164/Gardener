import { removeDevice, updateDevice } from "../../api/devices";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";
import { faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import MapInput from "../Inputs/MapInput";

type Props = {
  device: any;
};

const DeviceUpdateForm = ({ device }: Props) => {
  const { id } = useParams();

  const removeDeviceMutation = useMutation({
    mutationFn: () => removeDevice(id),
  });

  const updateDeviceMutation = useMutation({
    mutationFn: (updatedDevice) => updateDevice(updatedDevice),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, isSubmitting },
  } = useForm<any>({
    defaultValues: {
      name: device?.name,
      plant: device?.plant,
      city: device?.city,
      street: device?.street,
      lat: device.lat,
      lng: device.lng,
    },
  });

  const onSubmit = (value: any) => {
    const updatedDevice = { ...value, _id: id };
    updateDeviceMutation.mutate(updatedDevice);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("name")} label="Name" />
      <Input {...register("plant")} label="Plant" />
      <Input {...register("city")} label="City" />
      <Input {...register("street")} label="Street" />
      <MapInput lat={device.lat} lng={device.lng} setValue={setValue} />
      <div className="flex justify-end pt-4 mb-4">
        <Button
          icon={faTrash}
          text="Remove"
          className="mr-2"
          onClick={() => removeDeviceMutation.mutate()}
        />
        <Button
          disabled={!isDirty}
          type="submit"
          icon={faSave}
          text={isSubmitting ? "Updating..." : "Update"}
        />
      </div>
      <Toaster />
    </form>
  );
};

export default DeviceUpdateForm;
