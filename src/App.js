import React, { useState } from "react";
import "./App.css";
import Popup from "./Popup";
import useChatbot from "./ChatBot";
import "font-awesome/css/font-awesome.min.css";

function App() {
  const [popupOpened, setPopupOpened] = useState(true);
  // const [userInput1, setUserInput1] = useState("");
  // const [userInput2, setUserInput2] = useState("");

  const [finalUserInput1, setFinalUserInput1] = useState("");
  const [systemRole1, setSystemRole1] = useState("");
  const [position, setPosition] = useState("");
  const [types, setTypes] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [regenerateCount, setRegenerateCount] = useState(0); // New state variable
  const [hasGenerated, setHasGenerated] = useState(false);
  const [practiceMode, setPracticeMode] = useState(false);
  const [answers, setAnswers] = useState({}); // New state variable to hold answers
  const [recordingStarted, setRecordingStarted] = useState({});

  const handleInputChangeForAnswer = (index) => (e) => {
    setAnswers({
      ...answers,
      [index]: {
        ...answers[index],
        userInput: e.target.value,
      },
    });
  };

  const { output: output1, isLoading: isLoading1 } = useChatbot(
    finalUserInput1,
    systemRole1,
    regenerateCount
  );

  const handleGenerate = () => {
    setHasGenerated(true);

    setFinalUserInput1(
      `generate ${numQuestions} interview questions for a ${position} position focusing on ${types} questions`
    );
    setSystemRole1(
      "You are going to be given a prompt to generate interview questions." +
        "Make the questions a maximum of two sentances. Make sure the output" +
        "is in the format '1. (question 1). 2. (question 2) and so on'"
    );
  };

  const handleRegenerate = () => {
    setRegenerateCount((prevCount) => prevCount + 1);
  };

  const handleInputChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const handleStartPracticing = () => {
    setPracticeMode(true);
  };

  const toggleQuestion = (question) => {
    if (selectedQuestions.includes(question)) {
      setSelectedQuestions(selectedQuestions.filter((q) => q !== question));
    } else {
      setSelectedQuestions([...selectedQuestions, question]);
    }
  };

  const questionsArray = output1.split(/\d+\.\s/).slice(1);

  const handleStartRecording = (index) => {
    setRecordingStarted((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

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
          questions you want asked, and the number of questions you want me to
          make for you to choose from!
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
              placeholder="EX: behavioral"
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
          <div style={{ width: "400px" }}></div>
          {!practiceMode && (
            <>
              <button className="generate-button" onClick={handleGenerate}>
                Generate
              </button>
              <button className="regenerate-button" onClick={handleRegenerate}>
                <i className="fa fa-refresh"></i>
              </button>
            </>
          )}
        </div>
        <div className="full-width-output">
          {isLoading1 ? (
            <div className="output1-loading">Generating...</div>
          ) : (
            <div className="output1-questions">
              {practiceMode ? (
                selectedQuestions.map((question, index) => (
                  <div key={index} className="question-block">
                    <div className="question-text">{question}</div>
                    <input
                      className="answer-container"
                      type="text"
                      value={answers[index]?.userInput || ""}
                      onChange={handleInputChangeForAnswer(index)}
                      placeholder="Type answer"
                    />
                    <button>Submit</button>
                    <div>
                      <button
                        className="start-stop-recording-button"
                        onClick={() => handleStartRecording(index)}
                        disabled={recordingStarted[index]}
                      >
                        {recordingStarted[index] ? "Submit" : "Start Recording"}
                      </button>
                    </div>
                    <div className="timer">03:00</div>
                  </div>
                ))
              ) : (
                <>
                  {hasGenerated && (
                    <div className="output1-instructions">
                      Please select the questions you would like to study with
                      or regenerate a new set!
                    </div>
                  )}
                  {questionsArray.map((question, index) => (
                    <div key={index} className="question-wrapper">
                      <input
                        id={`checkbox-${index}`}
                        type="checkbox"
                        className="custom-checkbox"
                        checked={selectedQuestions.includes(question)}
                        onChange={() => toggleQuestion(question)}
                      />
                      <label htmlFor={`checkbox-${index}`}>{question}</label>{" "}
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
        {!practiceMode && selectedQuestions.length > 0 && (
          <button
            className="start-practicing-button"
            onClick={handleStartPracticing}
          >
            Start Practicing!
          </button>
        )}
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
