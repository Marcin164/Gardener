import axios from "axios";

export const getLatestData = async (data: any) => {
  try {
    const result = await axios({
      method: "post",
      url: "http://localhost:3001/data/latest",
      data: { deviceIds: data },
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    return result.data;
  } catch (error) {
    return error;
  }
};
