import React, { useState } from "react";
import supabase from "../supaBase";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

const FormSection = ({ setFacts, setShowForm }) => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const textLength = text.length;

  const submitHandler = async (e) => {
    // 1) Prevent browser
    e.preventDefault();

    // 2) Check if data is valid. If so, create a new fact
    if (text && isValidHttpUrl(source) && category && textLength <= 200) {
      /*

      // 3) Create a new Fact object
      const newFact = {
        id: Math.round(Math.random() * 20000000 * 200000),
        text: text,
        source: source,
        category: category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };
      console.log(newFact);

    */

      // 3) Upload fact to supabase and receive the new fact
      setIsUploading(true);

      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select();

      setIsUploading(false);

      // 4) Add the new fact in UI
      if (!error) setFacts((facts) => [newFact[0], ...facts]);

      // Reset all the input fields
      setText("");
      setSource("");
      setCategory("");

      // 6) Close entire form
      setShowForm(false);
    }
  };

  return (
    <form className="fact-form" id="fact-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Share a Tech fact with the World..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span>{200 - textLength}</span>
      <input
        type="text"
        placeholder="Trustworthy Source... eg: https://example.com"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">CHOOSE CATEGORY :</option>
        {CATEGORIES.map((cate) => (
          <option key={cate.name} value={cate.name}>
            {cate.name.toUpperCase()}
          </option>
        ))}
      </select>

      <button className="btn btn-large">Post</button>
    </form>
  );
};

export default FormSection;
