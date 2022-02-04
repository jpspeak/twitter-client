import axiosInstance from "./axiosInstance";
interface TweetType {
  id: string;
  body: string;
}
const getAll = async () => {
  return axiosInstance.get<TweetType[]>("/tweets");
};
const getOne = async (tweetId: string) => {
  return axiosInstance.get(`/tweets/${tweetId}`);
};
const getByUser = async (userId: string) => {
  return axiosInstance.get(`/tweets/by-user/${userId}`);
};
const create = async () => {
  return axiosInstance.post("/tweets");
};
const update = async (tweetId: string) => {
  return axiosInstance.put(`/tweets/${tweetId}`);
};
const remove = async (tweetId: string) => {
  return axiosInstance.delete(`/tweets/${tweetId}`);
};

const tweetAPI = { getAll, getOne, getByUser, create, update, remove };
export default tweetAPI;
