import useSWR from "swr";
import tweetAPI from "../../api/tweet.api";

const useTweets = () => {
  const { data, error } = useSWR(
    "/tweets",
    tweetAPI.getAll().then(res => res.data)
  );
  return { tweets: data, tweetsError: error };
};

export default useTweets;
