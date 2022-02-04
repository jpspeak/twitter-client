import useTweets from "../../hooks/swr/useTweets";
import TweetsItem from "./TweetsItem";

const Tweets = () => {
  const { tweets, tweetsError } = useTweets();
  if (tweetsError) return <p>Failed to load tweets</p>;
  return (
    <>
      <div>
        {tweets?.map(tweet => (
          <TweetsItem key={tweet.id} />
        ))}
      </div>
    </>
  );
};

export default Tweets;
