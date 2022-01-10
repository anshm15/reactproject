import React, {useState} from "react";

export const TextForm = ({formTitle}) => {
    const [text, setText] = useState("")

    const handleOnChange = (e)=>{
        setText(e.target.value)
    }
    const clickToUpp =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const clickToLow =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clickToCopy = ()=>{
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const clickToClear =()=>{
        let newText = '';
        setText(newText);
    }
  return (
    <div className="container">
      <div className="my-3">
        <h4>{formTitle}</h4>
        <textarea
          className="form-control"
          id="myBox"
          rows="5"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter the Text"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={clickToUpp}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={clickToLow}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={clickToCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={clickToClear}>Clear Text</button>
      <p className="py-3">Words - {text.split(" ").filter((e)=>{return e.length!==0}).length} Characters - {text.length}</p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
  );
};
