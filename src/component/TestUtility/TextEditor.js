import React, { useState } from "react";


const TextEditor = () => {
  const [text, setText] = useState(''); 

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
    <div className="container my-3" style={{ maxWidth: '80vw' ,marginTop:'0px' }}>

    {/* Textarea Column */}
    <div className="flex-grow-1 me-3">
      <textarea
        type="text"
        value={text}
        onChange={handleChange}
        className="form-control"
        rows="8"
        id="myBox"
      ></textarea>
    

    {/* Button Column */}
    
      <button
        type="button"
        onClick={handleUpperCase}
        className="btn btn-primary my-3"
      >
        UpperCase
      </button>
      <button
        type="button"
        onClick={handlelowercase}
        className="btn btn-primary mx-2 my-3"
      >
LoweCase      </button>
      <button
        type="button"
        onClick={handleExtraSpace}
        className="btn btn-primary mx-2 my-3"
      >
Remove Whitespace      </button>
      <button
        type="button"
        onClick={handleCopy}
        className="btn btn-primary mx-2 my-3"
      >
Copy   </button>
    
  </div>
</div>
    <div className="container">       
    <h1>Summary</h1>
    <p>{text.split(" ").length} Wotds and  {text.length} Character</p>
    <p>{0.08* text.split(" ").length} Minute reads</p>

</div>

    </>
  );
};

export default TextEditor;
