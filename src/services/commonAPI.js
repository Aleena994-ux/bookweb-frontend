import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const commonAPI = async (method, endpoint, data = {}) => {
  try {
    const response = await axios({
      method,
      url: `${BASE_URL}${endpoint}`,
      data,
    });
    return response.data;
  } catch (err) {
    return { error: err.message };
  }
};
