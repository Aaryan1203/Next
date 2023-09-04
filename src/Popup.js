import React from "react";
import ReactModal from "react-modal";
import "./Popup.css";

function Popup({ isOpen, onRequestClose }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="popup"
      overlayClassName="overlay"
    >
      <div className="about-next">
        <b>
          <i>NEXT</i>
        </b>
      </div>
      <div className="popup-description">
        More often than not, anxiety stems from feeling unprepared. This is what
        can make interviews feel so daunting; thinking you won't know how to
        answer an interviewee's questions can make the interview feel over
        before it's even begun. But, what if you could practice enough to be
        comfortable being uncomfortable, always having something to say and
        adapting on the spot? This is where we can help:
        <br></br>
        <br></br>
        <i>
          Next will generate the best interview questions that you can choose to
          answer, give you a couple of minutes to record a response, and then
          offer constructive feedback for next time!
        </i>
        <br></br>
        <br></br>
        Just knowing the most common questions and watching videos on how other
        people would respond isn't enough; you'd like to answer these questions
        yourself and know that you'll thrive! Using ChatGPT and voice-to-text
        technology, we'll make sure you ace your next interview!
        <div>
          <br></br>
          Are you ready for what's <i>NEXT</i>?
        </div>
        <br></br>
        <button className="go-button" onClick={onRequestClose}>
          Go!
        </button>
      </div>
    </ReactModal>
  );
}

export default Popup;
