import axios from "axios";
import toast from "react-hot-toast";

export const getDevices = async () => {
  try {
    const result = await axios({
      method: "get",
      url: "http://localhost:3001/devices/6451273b02c336b5e7c51345",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    return result.data;
  } catch (error) {
    return error;
  }
};

export const createDevice = async (data: any) => {
  try {
    const result = await axios({
      method: "post",
      url: "http://localhost:3001/devices",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      data,
    });

    return result.data;
  } catch (error) {
    return error;
  }
};

export const updateDevice = async (data: any) => {
  try {
    const result = await axios({
      method: "put",
      url: `http://localhost:3001/devices/${data._id}`,
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      data,
    });

    toast.success("Device updated!");

    return result;
  } catch (error) {
    toast.error("Cannot update device");
    return error;
  }
};

export const removeDevice = async (id: any) => {
  try {
    const result = await axios({
      method: "delete",
      url: `http://localhost:3001/devices/${id}`,
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    toast.success("Device removed!");

    return result;
  } catch (error) {
    toast.error("Cannot remove device");
    return error;
  }
};
