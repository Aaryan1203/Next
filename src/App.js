import React, { useState } from "react";
import "./App.css";
import Popup from "./Popup";

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
      <button onClick={openPopup}>
        <b>?</b>
      </button>
      <Popup isOpen={popupOpened} onRequestClose={closePopup} />
      <div className="microphone"></div>
      <div className="next-text">NEXT</div>
      <div className="app-slogan">Record. Recommend. Realize.</div>
      <div className="outer-box">
        <div className="scrollable-textbox">
          <textarea
            className="textbox-text"
            placeholder="ChatGPT inputs"
          ></textarea>
        </div>
      </div>
      <div className="descriptions">
        <div className="description description-1">
          <div className="description-title">Free Recorder and Suggester</div>
          <div className="description-content">
            Next allows you to record speech, summarize ideas, and receive
            recommendations for progressing with your concepts, all without any
            purchases or downloads
          </div>
        </div>
        <div className="description description-2">
          <div className="description-title">Privacy Guaranteed</div>
          <div className="description-content">
            Your recordings remain confidential with us. ChatGPT swiftly
            processes them to distill your thoughts and provide insights.
            Additionally, our sessions are ephemeral with no content linkage to
            accounts
          </div>
        </div>
        <div className="description description-3">
          <div className="description-title">Downloadable Content</div>
          <div className="description-content">
            Inspiration can come and go at any instant. With this in mind, we've
            eliminated the need for account creation. Dive right in and, at your
            convenience, download summaries and suggestions directly to your
            device
          </div>
        </div>
        <div className="description description-4">
          <div className="description-title">Brainstorm Aloud</div>
          <div className="description-content">
            At times, voicing your thoughts aloud is the key to clarity for your
            project. Whether your team is unavailable or you're brainstorming
            solo, our technology is here to help you navigate those 'aha!'
            moments
          </div>
        </div>
        <div className="description description-5">
          <div className="description-title">Take Notes Automatically</div>
          <div className="description-content">
            During brainstorming sessions, staying immersed in the conversation
            is crucial. We`ll handle the note-taking, allowing you to engage
            fully while benefiting from our insights
          </div>
        </div>
        <div className="description description-6">
          <div className="description-title">Accessible</div>
          <div className="description-content">
            Our commitment to accessibility and inclusion drives us to make the
            innovative ChatGPT technology available to all. With our web
            application, even if you're unable to type, you can voice your
            thoughts effortlessly
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
