import React, {useState} from 'react'

export default function TextForm(props) {
  // eslint-disable-next-line
  /* eslint-disable */
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked!"+ text)
    let newText= text.toUpperCase()
    // setText("You have clicked on handleUpClick")
    setText(newText)
    // props.showAlert("Converted to uppercase!", "success") 
  }
  const handleLowClick=()=>{
     let newText= text.toLowerCase()
     setText(newText)
    //  props.showAlert("Converted to lowercase!", "success")
  }
  const handleClearClick=()=>{
    let newText= ''
    setText(newText)
    // props.showAlert("Text Cleared!", "success")
  }
  const handleCopy=()=>{
    console.log("Text Copied!")
    var text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    // props.showAlert("Text Copied to Clipboard!", "success")
  }
  const handleExtraSpaces=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    // props.showAlert("Extra spaces removed!", "success")
  }

  const handleOnChange=(event)=>{
    // console.log("On Change"); #042743
    setText(event.target.value)
  }

  const [text,setText] = useState('');
  // text = "new text"; // wrong way to change the text
  // setText("new text"); //Correct way to change the text
  return (
    <div style={{color: props.mode==='light'?'black':'white'}}>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="4" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button className=" btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className=" btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className=" btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className=" btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className=" btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>        
      </div>
      <div className="contain my-3">
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length + " minutes"}</p>
        <h3>Preview</h3>
        <p>{text.length>0? text:"Enter something in the textbox above to preview it here! "}</p>
      </div>
    </div>
  )
}

  