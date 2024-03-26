import React, { useState } from "react";
import supabase from "../supaBase";

const Fact = ({ category, fact, setFacts }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const voteHandler = async (columnName) => {
    setIsUpdating(true);
    const { data: updateFactVote, error } = await supabase
      .from("facts")
      .update({ [columnName]: fact[columnName] + 1 })
      .eq("id", fact.id)
      .select();

    setIsUpdating(false);

    // console.log(updateFactVote);
    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updateFactVote[0] : f))
      );
  };

  return (
    <li key={fact.id} className="fact">
      <p>
        {fact.text}
        <a className="source" href={fact.source} target="_blank">
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: category.find((cate) => cate.name === fact.category)
            .color,
        }}
      >
        #{fact.category}#
      </span>
      <div className="vote-buttons">
        <button
          onClick={() => voteHandler("votesInteresting")}
          disabled={isUpdating}
        >
          👍🏻 {fact.votesInteresting}
        </button>
        <button
          onClick={() => voteHandler("votesMindblowing")}
          disabled={isUpdating}
        >
          🤯 {fact.votesMindblowing}
        </button>
        <button onClick={() => voteHandler("votesFalse")} disabled={isUpdating}>
          ❌ {fact.votesFalse}
        </button>
      </div>
    </li>
  );
};

export default Fact;
