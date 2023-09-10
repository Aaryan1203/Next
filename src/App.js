import React, { useState, useEffect } from "react";
import "./App.css";
import Popup from "./Popup";
import fetchChatbotResponse from "./ChatBot";

function App() {
  const [popupOpened, setPopupOpened] = useState(true);
  const [finalUserInput1, setFinalUserInput1] = useState("");
  const [systemRole1, setSystemRole1] = useState("");
  const [position, setPosition] = useState("");
  const [types, setTypes] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [practiceMode, setPracticeMode] = useState(false);
  const [answers, setAnswers] = useState({});
  const [recordingStarted, setRecordingStarted] = useState({});
  const [submittedQuestions, setSubmittedQuestions] = useState({});
  const [chatbotResponses, setChatbotResponses] = useState({});
  const [output1, setOutput1] = useState("");
  const [regenerateCounter, setRegenerateCounter] = useState(0);
  const [isLoading1, setIsLoading1] = useState(false);
  const [recognitionObjects, setRecognitionObjects] = useState({});

  const handleSpeechRecognition = (index) => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;

    recognition.onresult = function (event) {
      const transcript =
        event.results[event.results.length - 1][0].transcript.trim();

      setAnswers({
        ...answers,
        [index]: {
          ...answers[index],
          userInput: transcript,
        },
      });
    };

    recognition.onerror = function (event) {
      console.error("Error occurred in recognition: " + event.error);
    };

    recognition.onend = function () {
      setRecordingStarted({
        ...recordingStarted,
        [index]: false,
      });
    };

    recognition.start();

    return recognition;
  };

  const handleInputChangeForAnswer = (index) => (e) => {
    setAnswers({
      ...answers,
      [index]: {
        ...answers[index],
        userInput: e.target.value,
      },
    });
  };

  const handleQuestionSubmit = async (index) => {
    setSubmittedQuestions({
      ...submittedQuestions,
      [index]: true,
    });

    const originalQuestion = selectedQuestions[index];
    const answer = answers[index].userInput || "";

    const systemRoleForThisQuestion = `The original interview question was: '${originalQuestion}'. 
    Please provide constructive feedback on the answer. Respond as if you are talking to the user and respond in 5 sentences.
    Format it such that you give two bullet points (one sentence each) on what you liked, two bullet points (one sentence each)
    on what you think can be improved, and conclude with an overall evaluation (one sentence). Make sure to separate each sentence with 
    a "*" so it is like a bullet point.`;

    const { output: chatbotOutput } = await fetchChatbotResponse(
      answer,
      systemRoleForThisQuestion
    );

    setChatbotResponses({
      ...chatbotResponses,
      [index]: chatbotOutput,
    });
  };

  useEffect(() => {
    if (finalUserInput1 && systemRole1) {
      const fetchData = async () => {
        setIsLoading1(true);
        setHasGenerated(true);

        const { output, error } = await fetchChatbotResponse(
          finalUserInput1,
          systemRole1
        );

        setIsLoading1(false);

        if (error) {
          console.error("Error while generating questions:", error);
        } else {
          setOutput1(output);
        }
      };

      fetchData();
    }
  }, [finalUserInput1, systemRole1, regenerateCounter]);

  const handleGenerate = async () => {
    const generatedUserInput = `generate ${numQuestions} interview questions for a ${position} position focusing on ${types} questions`;
    setFinalUserInput1(generatedUserInput);

    const generatedSystemRole =
      "You are going to be given a prompt to generate interview questions. Make the questions a maximum of two sentences. Make sure the output is in the format '1. (question 1). 2. (question 2) and so on'";
    setSystemRole1(generatedSystemRole);
  };

  const handleRegenerate = () => {
    setRegenerateCounter(regenerateCounter + 1);
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

  const toggleRecording = (index) => {
    if (recordingStarted[index]) {
      const recognition = recognitionObjects[index];
      recognition && recognition.stop();
      setRecordingStarted({
        ...recordingStarted,
        [index]: false,
      });
    } else {
      const recognition = handleSpeechRecognition(index);
      setRecognitionObjects({
        ...recognitionObjects,
        [index]: recognition,
      });
      setRecordingStarted({
        ...recordingStarted,
        [index]: true,
      });
    }
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
          Hi! To allow me to help you with interview preparation, please let me know
          the position you're interviewing for, the type(s) of
          questions you want asked, and how many questions you want me to
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
              placeholder="EX: doctor"
            />
          </div>
          <div className="input-row">
            <div className="inputs">Type(s):</div>
            <input
              className="input-container"
              type="text"
              value={types}
              onChange={handleInputChange(setTypes)}
              placeholder="EX: patient care"
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
          {!practiceMode && (
            <>
              <button
                className="generate-button"
                onClick={hasGenerated ? handleRegenerate : handleGenerate}
              >
                {hasGenerated ? "Regenerate" : "Generate"}
              </button>
            </>
          )}
        </div>
        <div className="full-width-output">
          {isLoading1 ? (
            <div className="output1-loading">Generating...</div>
          ) : (
            <div className="output1-questions">
              <div className="response-instructions">
                Time to practice! Feel free to answer whichever questions you 
                want in any order you want. For each question, simply click the 
                "Start Recording" button, answer the question to the best of your 
                ability, and click the "Stop Recording" button. Then, edit your answer 
                if your some of your words were accidentally misheard, and submit your 
                response to get instantaneous feedback! You'll also be able to re-record
                and practice these questions as many times as you want; simply click
                the "Answer Again" button!
              </div>
              {practiceMode ? (
                selectedQuestions.map((question, index) => (
                  <div key={index} className="question-block">
                    <div className="question-text">{`${
                      index + 1
                    }. ${question}`}</div>
                    <input
                      className="answer-container"
                      type="text"
                      value={answers[index]?.userInput || ""}
                      onChange={handleInputChangeForAnswer(index)}
                      placeholder="Type answer"
                    />{" "}
                    <button onClick={() => handleQuestionSubmit(index)}>
                      Submit
                    </button>
                    <div>
                      <button
                        className="start-stop-recording-button"
                        onClick={() => toggleRecording(index)}
                      >
                        {recordingStarted[index]
                          ? "Stop Recording"
                          : "Start Recording"}
                      </button>
                    </div>
                    {submittedQuestions[index] && (
                      <div className="output-box" style={{ height: "auto" }}>
                        <div className="feedback">Feedback:</div>
                        {chatbotResponses[index]
                          ? chatbotResponses[index]
                              .split("*")
                              .filter((sentence) => sentence.trim() !== "")
                              .map((sentence, i) => (
                                <div key={i} style={{ marginBottom: 15 }}>
                                  * {sentence.trim()}
                                </div>
                              ))
                          : "Loading..."}
                      </div>
                    )}
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
                  {output1
                    .split(/\d+\.\s/)
                    .slice(1)
                    .map((question, index) => (
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
