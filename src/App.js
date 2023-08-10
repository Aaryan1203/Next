import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="microphone"></div>
      <div className="next-text">NEXT</div>
      <div className="outer-box">
        <h1 className="app-slogan">
          <i>Record. Recommend. Realize.</i>
          </h1>
          <br></br>
          <h2 className="app-description">
          Behind every great project is a simple idea. 
          Unfortunately, sometimes ideation is one of 
          the most difficult steps in the development 
          of a project; that extra spark is needed to 
          turn on that light bulb. This is where our 
          technology comes into play: have our web 
          application join in on the conversation and 
          give you instant feedback on your team’s ideas! 
          With the help of ChatGPT and voice-to-text 
          technology, we can help you figure out what to
           do next to successfully bring your project to life!</h2>
      </div>
      <div className="descriptions">
        <div className="description description-1">
          <b>Free Recorder and Suggester:</b> 
          <br></br> Our web application 
          doesn’t require purchases or downloads in order 
          to record your speech, summarize your ideas, and 
          recommend you on how to move forward with your ideas.
        </div>
        <div className="description description-2">
          <b>Privacy Guaranteed:</b> 
          <br></br> We ensure that your recordings 
          are never kept by us. They are simply processed by 
          ChatGPT technology as it summarizes your thoughts 
          and offers suggestions. Furthermore, there are no 
          accounts for content to be linked to; each session 
          using our web application is temporary.
        </div>
        <div className="description description-3">
          <b>Downloadable Content:</b> 
          <br></br> Inspiration can come and go at 
          any instant. Because of this, we don’t require any 
          accounts to be made, skipping the login process 
          altogether and still allowing you to save the summary 
          and suggestions we give you by downloading a txt file 
          to your local device.
        </div>
        <div className="description description-4">
          <b>Brainstorm Aloud:</b> 
          <br></br> Sometimes the best or even only way 
          to figure out what you want for your project is to say 
          what comes to mind out loud! If your teammates aren’t 
          available to talk right now, or you’re working by yourself, 
          you can use our technology to bounce ideas around and have
          that ah-ha moment!
        </div>
        <div className="description description-5">
          <b>Take Notes Automatically:</b>
          <br></br> When you’re having an ideation 
          session with your teammates, the last thing you want to do 
          is take notes and lose focus on the conversation itself. 
          Instead, let us be your note taker and give you some insight too!
        </div>
        <div className="description description-6">
          <b>Accessible:</b> 
          <br></br> We prioritize accessibility and inclusion and 
          want to give everyone the chance to use the exciting ChatGPT 
          technology. With our web application, now those who cannot 
          type out their thoughts on the ChatGPT platform can speak 
          them instead!
        </div>
      </div>
    </div>
  );
}

export default App;
