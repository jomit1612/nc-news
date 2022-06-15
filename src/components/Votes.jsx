import { patchVotes } from "../Utils/api";
import { useState } from "react";

const Votes = ({ article_id, votes }) => {
  const [votesChange, setVotesChange] = useState(0);

  const increaseVotes = () => {
    setVotesChange((currentVotes) => currentVotes + 1);
    patchVotes(article_id, 1).catch((err) => {
      setVotesChange((currentVotes) => currentVotes - 1);
    });
  };

  const decreaseVotes = () => {
    setVotesChange((currentVotes) => currentVotes - 1);
    patchVotes(article_id, -1).catch((err) => {
      setVotesChange((currentVotes) => currentVotes + 1);
    });
  };
  return (
    <>
      <h5>Votes({votes + votesChange})</h5>
      <button onClick={increaseVotes}>Upvote</button>
      <button onClick={decreaseVotes}>Downvote</button>
    </>
  );
};

export default Votes;
