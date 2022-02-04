import axiosInstance from "./axiosInstance";

const signIn = async () => {
  return axiosInstance.post("/auth/signIn");
};
const signUp = async () => {
  return axiosInstance.post("auth/signUp");
};

const authAPI = { signIn, signUp };
export default authAPI;
