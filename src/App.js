import "./App.css";
import React, { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  // const defineButton = document.getElementById("defineButton");
  // const translateButton = document.getElementById("translateButton");
  // const wordInput = document.getElementById("wordInput");
  // const definitionResult = document.getElementById("definitionResult");
  // const translationResult = document.getElementById("translationResult");
  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setWord(event.target.value);
  };

  // defineButton.addEventListener("click", async () => {
  //   const word = wordInput.value;
  //   if (word) {
  //     const response = await fetch(`/define/${word}`);
  //     const data = await response.json();
  //     definitionResult.textContent = data.definition;
  //   }
  // });

  const translate = async () => {
    if (word) {
      const response = await fetch(
        `https://j4col9yg8j.execute-api.us-east-2.amazonaws.com/initial/Translator?word=${word}`,
        { mode: "cors" }
      );
      const data = await response.json();
      console.log(data);
      setTranslation(JSON.stringify(data));
      // translationResult.textContent = data.translation;
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
      <button id="defineButton">Define/定義（ていぎ）</button>
      <div id="resultArea">
        <h2>Results:</h2>
        <div id="translationResult">{translation}</div>
        <div id="definitionResult"></div>
      </div>
    </div>
  );
}

export default App;
