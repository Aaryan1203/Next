import React, { useState } from "react";

async function getData({ prompt, systemRole }) {
  try {
    const gptResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: systemRole,
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );
    const response = await gptResponse.json();
    return response["choices"][0]["message"]["content"];
  } catch (error) {
    throw error;
  }
}

function Chatbot({ systemRole }) {
  const [userInput, setUserInput] = useState("");
  const [output, setOutput] = useState("");
  console.log("api-key: " + process.env.REACT_APP_OPENAI_API_KEY);
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  const handleSubmit = async () => {
    try {
      const response = await getData({
        prompt: userInput,
        systemRole: systemRole,
      });
      setOutput(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setUserInput("");
  };

  return (
    <div className="chat-bot">
      <div className="output">{output}</div>
      <div className="input-container">
        <textarea
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your question here..."
          className="input-button"
        />
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
