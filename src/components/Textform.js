import React, { useState } from 'react';

export default function Textform(props) {

    const handleUpClick = ()=>{
        // setText("Clicked the button");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Upper Case");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleLowClick =()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Lower Case");

    }
    const clearClick = ()=>{
      setText(' ');
      props.showAlert("Cleared Text");

     }
     const speak = ()=>{
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
       window.speechSynthesis.speak(msg);
       props.showAlert("Speaking");

     }
     



  const [text, setText] = useState('Enter Text Here');
    // setText("Ypu can enter text here"); 
  return (
    <div>
      <form>
         <div className="container my-4 mx-3" style = {{color: props.mode==='dark' ? 'white' : 'black'}}>
            <div className="form-group">
          <label htmlFor="formGroupExampleInput2 my-4 mx-3">{props.heading}</label>
          <input type="text" className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='light' ? 'white' : 'grey'}}/>
          <button className="btn btn-primary  my-4 mx-3" onClick={handleUpClick}>Upper Case</button>
          <button className="btn btn-primary my-4 mx-3" onClick={handleLowClick}>Lower Case</button>
          <button className="btn btn-primary my-4 mx-3" onClick={clearClick}>Clear Text</button>
          <button className="btn btn-primary my-4 mx-3" onClick={speak}>Speak </button>

        </div>
      </div>
      </form>
      <hr />
      <div className="container my-4" style = {{color: props.mode==='dark' ? 'white' : 'black'}} >
      <h4>Your Text Summary</h4>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.009* text.split(" ").length} minutes to read {text.split(" ").length} words</p>
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    </div>

    
  );
 
}

