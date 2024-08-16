import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpperClick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearText =()=>{
        let newText="";
        setText(newText);
    }
    const handleOnChange =(event)=>{
        // console.log('on change');
        setText(event.target.value);
    }
const[text,setText]=useState('');
  return (
    <>
    <div style={{color:props.mode=== 'dark'? 'white': 'black'}}>
<div className="container" >
    <h1>{props.heading} </h1>
  <textarea className="form-control" style={{backgroundColor:props.mode=== 'light'? 'white': '#15174e',color:props.mode=== 'dark'? 'white': 'black'}}  value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
  <button type="button" disabled={text.length===0} className="btn btn-success my-3 mx-2"  onClick={handleUpperClick}>convert to uppercase</button>
  <button type="button" disabled={text.length===0}  className="btn btn-success my-3 mx-2"  onClick={handleLowerClick}>convert to lowercase</button>
  <button type="button" disabled={text.length===0}  className="btn btn-success my-3 mx-2 "  onClick={handleClearText}>clear text</button>
</div>
<div className="container my-2">
    <h2>your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}  words and {text.length}characters</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>
</div>
   </>
  )
}
