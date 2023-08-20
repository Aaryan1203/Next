import React, { useState } from "react";
import "./App.css";
import Popup from "./Popup";
import Chatbot from "./ChatBot";

function App() {
  const [popupOpened, setPopupOpened] = useState(true);

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
        <div className="scrollable-textbox">
          <Chatbot />
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
            We ensure that your recordings are never kept by us. They are simply
            processed by ChatGPT technology as it gives feedback on how you
            responded to an interview question. Furthermore, there are no
            accounts for content to be linked to; each session using our web
            application is temporary.
          </div>
        </div>
        <div className="description description-3">
          <div className="description-title">Downloadable Content</div>
          <div className="description-content">
            Inspiration can come and go at any instant. Because of this, we
            don't require any accounts to be made, skipping the login process
            altogether and still allowing you to save the feedback we give you
            by downloading a txt file to your local device.
          </div>
        </div>
        <div className="description description-4">
          <div className="description-title">Practice Aloud</div>
          <div className="description-content">
            Knowing common interview questions and their responses means nothing
            if you can't confidently articulate the responses yourself! By
            recording your answers to these questions in 3 minutes or less,
            you'll learn how to adapt on the fly and smoothly deliver a response
            as if you never blanked out at all!
          </div>
        </div>
        <div className="description description-5">
          <div className="description-title">Receive Feedback</div>
          <div className="description-content">
            Don't be afraid to make mistakes; how else will you learn how to
            embrace that little bit of interview anxiety and come out as a
            strong candidate? Instead, say what comes to mind and let us help
            you figure out what you should continue to say or what could say
            instead when you encounter a similar question.
          </div>
        </div>
        <div className="description description-6">
          <div className="description-title">Accessible</div>
          <div className="description-content">
            We prioritize accessibility and inclusion and want to give everyone
            the chance to use the exciting ChatGPT technology. With our web
            application, now those who cannot type out their thoughts on the
            ChatGPT platform can speak them instead!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
