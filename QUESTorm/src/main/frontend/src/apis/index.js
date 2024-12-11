import axios from "axios";

export const signInApi = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/api/auth/signIn", data);
    const result = response.data;
    return result;
  } catch (error) {
    console.error("Error during sign-in API call:", error);
    return null;
  }
};
