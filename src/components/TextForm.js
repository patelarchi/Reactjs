import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLwClick = () => {
    setText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText('');
  };

  const handleReverseClick = () => {
    setText(text.split('').reverse().join(''));
  };

  const handleRemoveSpacesClick = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
  };

  const handleDownloadClick = () => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'text.txt';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const handleFindAndReplaceClick = () => {
    const findText = prompt('Enter the text to find:');
    const replaceText = prompt('Enter the text to replace with:');
    setText(text.replace(new RegExp(findText, 'g'), replaceText));
  };

  const [text, setText] = useState('Enter Text Here....');

  return (
    <>
    <div className="container">
      <div className="form-floating m-5">
        <h2 className='pb-3'>{props.heading}</h2>
        <textarea className="form-control" onChange={handleOnChange} spellCheck="true" id="myBox" rows='8' value={text}></textarea>
        <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleLwClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleReverseClick}>Convert To Reverse</button>
        <button className="btn btn-primary mt-3 ms-2" onClick={handleRemoveSpacesClick}>Remove Extra Spaces</button>
        <button className="btn btn-primary mt-3 ms-2" onClick={handleCopyClick}>Copy To Clipboard</button>
        <button className="btn btn-primary mt-3 ms-2" onClick={handleDownloadClick}>Download Text</button>
        <button className="btn btn-primary mt-3 ms-2" onClick={handleFindAndReplaceClick}>Find & Replace</button> 
      </div>
    </div>
    <div className="container">
      <div className="row my-3 m-5">
        <h3>Your text Summury</h3>
        <p>{text.split(/[.!?]+/).length || 0} sentences , {text.split(' ').length} words and {text.length} characters</p>
        <p>{text.match(/[aeiouAEIOU]/g)?.length || 0} vowels and {text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0} constants</p>
        <p>{text.split(/\n+/).filter((element) => element.length !== 0).length} paragraph </p>
        <p>{text.split(' ').length * 0.008} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
    </>
  );
}
