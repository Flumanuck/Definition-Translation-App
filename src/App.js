import "./App.css";
import React, { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [definition, setDefinition] = useState("");
  const handleChange = (event) => {
    setWord(event.target.value);
  };

  const define = async () => {
    if (word) {
      const response = await fetch(
        `https://5jhr175vce.execute-api.us-east-2.amazonaws.com/First/definition?word=${word}`,
        { mode: "cors" }
      );
      const data = await response.json();
      setDefinition(JSON.stringify(data));
    }
  };

  const translate = async () => {
    if (word) {
      const response = await fetch(
        `https://5jhr175vce.execute-api.us-east-2.amazonaws.com/First?word=${word}`,
        { mode: "cors" }
      );
      const data = await response.json();
      console.log(data);
      setTranslation(JSON.stringify(data));
    }
  };

  return (
    <div>
      <h1>Translation and Definition App</h1>
      <label for="wordInput">Enter a word/言葉を入れて下さい:</label>
      <input type="text" id="wordInput" onChange={handleChange} />
      <button id="translateButton" onClick={translate}>
        Translate/翻訳（ほんやく）
      </button>
      <button id="defineButton" onClick={define}>
        Define/定義（ていぎ）
      </button>
      <div id="resultArea">
        <h2>Results:</h2>
        <div id="translationResult">{translation}</div>
        <div id="definitionResult">{definition}</div>
      </div>
    </div>
  );
}

export default App;
