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
        Anxiety often arises from a sense of unpreparedness, a feeling that can
        make interviews seem overwhelming before they even begin. Imagine,
        however, being so well-practiced that you're comfortable even in
        uncomfortable situations—always ready with a response and able to adapt
        on the fly. That's where our platform steps in to empower you
        <div className="popup-description-sub">
          <i>
            Next will generate the best interview questions that you can choose
            to answer, give you a couple of minutes to record a response, and
            then offer constructive feedback for next time!
          </i>
        </div>
        Being familiar with common questions and observing others' responses is
        a great start, but true confidence comes from practicing your own
        answers. With the aid of ChatGPT and voice-to-text technology, we're
        committed to helping you not just survive, but truly excel in your
        upcoming interview
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
