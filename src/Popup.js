import React from 'react';
import ReactModal from 'react-modal';
import './Popup.css';

function Popup ({ isOpen, onRequestClose }) {
    
    return (
        <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="popup"
        overlayClassName="overlay"
        >
            <div className='popup-description'>
                Every monumental project starts with a simple idea. While sparking
                that initial concept can be elusive, our web application, enhanced by
                ChatGPT and voice-to-text technology, is here to help. It seamlessly
                integrates into your brainstorming sessions, providing real-time
                feedback. Let us illuminate the path forward, helping bring your
                project to life!
                <div>
                <br></br>
                Are you ready for what's <i><b>NEXT</b></i>?
                </div>
                <br></br>
                <button className="go-button" onClick={onRequestClose}>Go!</button>
            </div>
        </ReactModal>
    );
}

export default Popup;