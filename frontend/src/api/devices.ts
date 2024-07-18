import axios from "axios";

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
