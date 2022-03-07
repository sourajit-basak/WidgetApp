import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  const [userInput, setUserInput] = useState("");
  const userVar = 0;
  useEffect(() => {
    console.log("from use effect");
  }, [userVar]);
  return (
    <div className="ui form">
      <div className="field">
        <label>Search : </label>
        <input
          className="input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
    </div>
  );
};
export default SearchComponent;
