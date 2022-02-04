import useSWR from "swr";
import tweetAPI from "../../api/tweet.api";

const useTweets = () => {
  const result = useSWR("/tweets", tweetAPI.getAll);
  return result;
};

export default useTweets;
