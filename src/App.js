import React, { useState } from "react";
import "./App.css";
import Popup from "./Popup";
import useChatbot from "./ChatBot";

function App() {
  const [popupOpened, setPopupOpened] = useState(true);
  // const [userInput1, setUserInput1] = useState("");
  // const [userInput2, setUserInput2] = useState("");

  const [finalUserInput1, setFinalUserInput1] = useState("");
  const [finalUserInput2, setFinalUserInput2] = useState("");
  const [systemRole1, setSystemRole1] = useState("");
  const [systemRole2, setSystemRole2] = useState("");
  const [position, setPosition] = useState("");
  const [types, setTypes] = useState("");
  const [numQuestions, setNumQuestions] = useState("");

  const { output: output1, isLoading: isLoading1 } = useChatbot(
    finalUserInput1,
    systemRole1
  );
  const { output: output2, isLoading: isLoading2 } = useChatbot(
    finalUserInput2,
    systemRole2
  );

  const handleGenerate = () => {
    setFinalUserInput1(
      `generate ${numQuestions} interview questions for a ${position} position focusing on ${types}`
    );
    setSystemRole1(
      "You are going to be given a prompt to generate interview questions. Make the questions a maximum of two sentances"
    );
  };

  const handleInputChange = (setState) => (e) => {
    setState(e.target.value);
  };

  // const handleSubmit2 = (newSystemRole) => {
  //   setFinalUserInput2(userInput2);
  //   setSystemRole2(newSystemRole);
  // };

  const openPopup = () => {
    setPopupOpened(true);
  };

  const closePopup = () => {
    setPopupOpened(false);
  };

  return (
    <div className="App">
      <button onClick={openPopup} className="info-button">
        ?
      </button>
      <Popup isOpen={popupOpened} onRequestClose={closePopup} />
      <div className="microphone"></div>
      <div className="next-text">NEXT</div>
      <div className="app-slogan">Ask. Answer. Ace.</div>
      <div className="outer-box">
        <div className="welcome-text">
          Hi! To help me help you with interview preparation, please let me know
          what type of position you're interviewing for, the type(s) of
          questions you want asked, and the number of questions you want
          me to make for you to choose from!
        </div>
          <div className="question-generation-inputs">
            <div className="input-row">
              <div className="inputs">Position:</div>
              <input
                className="input-container"
                type="text"
                value={position}
                onChange={handleInputChange(setPosition)}
                placeholder="EX: data analyst"
              />
            </div>
            <div className="input-row">
              <div className="inputs">Type(s):</div>
              <input
                className="input-container"
                type="text"
                value={types}
                onChange={handleInputChange(setTypes)}
                placeholder="EX: adaptability"
              />
            </div>
            <div className="input-row">
              <div className="inputs"># of Questions:</div>
              <input
                className="input-container"
                type="text"
                value={numQuestions}
                onChange={handleInputChange(setNumQuestions)}
                placeholder="EX: 5"
              />
            </div>
        </div>
        <div className="generate-button-wrapper">
            <button
              className="generate-button"
              onClick={() => handleGenerate()}
            >
              Generate
            </button>
        </div>
        <div className="full-width-output">
          {isLoading1 ? (
            <p className="output1">Loading...</p>
          ) : (
            <p className="output1">{output1}</p>
          )}
        </div>
      </div>
      <div className="descriptions">
        <div className="description description-1">
          <div className="description-title">Free Recorder and Suggester</div>
          <div className="description-content">
            Our web application doesn't require purchases or downloads in order
            to record your interview question response, commend the strong
            points, and constructively suggest what you can think about saying
            next time.
          </div>
        </div>
        <div className="description description-2">
          <div className="description-title">Privacy Guaranteed</div>
          <div className="description-content">
            We don't store your recordings. They're processed by ChatGPT for
            feedback on interview responses. No accounts link content; each
            session is temporary.
          </div>
        </div>
        <div className="description description-3">
          <div className="description-title">Downloadable Content</div>
          <div className="description-content">
            Inspiration can strike unexpectedly. For this reason, we've
            eliminated the need for account creation and logins. Instead, we
            offer a seamless experience where you can easily download our
            feedback to your device.
          </div>
        </div>
        <div className="description description-4">
          <div className="description-title">Practice Aloud</div>
          <div className="description-content">
            Knowing interview questions is useless if you can't articulate
            confidently! By recording answers in under 3 minutes, you'll master
            adapting and delivering responses without hesitation.
          </div>
        </div>
        <div className="description description-5">
          <div className="description-title">Receive Feedback</div>
          <div className="description-content">
            Don't fear mistakes; they teach you to handle interview anxiety and
            stand out. Speak freely, and we'll guide you on what to keep or
            adjust for future questions.
          </div>
        </div>
        <div className="description description-6">
          <div className="description-title">Accessible</div>
          <div className="description-content">
            We value accessibility and inclusion, aiming to offer everyone the
            ChatGPT experience. With our web app, those unable to type can now
            speak their thoughts!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
