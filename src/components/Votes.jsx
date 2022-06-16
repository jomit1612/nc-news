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
      <button onClick={increaseVotes} disabled={votesChange}>
        <img
          src="https://img.icons8.com/bubbles/50/undefined/up.png"
          alt="upvote button"
          className="voteButton"
        ></img>
      </button>
      <button onClick={decreaseVotes} disabled={votesChange}>
        <img
          src="https://img.icons8.com/bubbles/50/undefined/down.png"
          alt="downvote button"
        />
      </button>
    </>
  );
};

export default Votes;
