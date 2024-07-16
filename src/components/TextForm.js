import React , {useState} from 'react';




export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log('up click');
    setText('nbwdefhehbeh');
  }
  const handleOnClick = (event) =>{
    console.log('on click');
    setText(event.target.value);
  }
const [text, setText] = useState('Enter Text Here....');

  return (
    <div className="container">
        
    <div className="form-floating m-5">
    <h2 className='pb-3'>{props.heading}</h2>
  <textarea className="form-control" onClick={handleOnClick} id="myBox" rows='8' value={text}></textarea>
  
  <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert To Uppercase</button>
</div>
 
</div>
  )
}
