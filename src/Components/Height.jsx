import React from 'react';
import { TextField } from '@material-ui/core';
import { useState, useEffect } from 'react';


export default function Height({height,setHeight}) {
  //const [height, setHeight]=useState();
   const[text, setText] = useState();
  useEffect(() => {
   // setHeight(props.height);
 //setHeight(localStorage.getItem('text'));
  }, []);

  function val(event){
      let key = event.target.attributes.name.value;
      //text.value += key;
      if(key === 'c'){
        setText('')
        //text.value = '';
       // localStorage.clear();
      }else {
        setText(text + key);
        //text.value+= key;
        //localStorage.setItem('text',JSON.stringify(text))
      }
      
      
      //this.props.NewVal(document.getElementById('height-input').value);
      // console.log(key)
    }
    const handleHeightChange = (value) =>{
      //setHeight({...height,text: value})

    }
  return (<>
    <div>Height here</div>
    <TextField id="height-input"  variant="filled" value={text} 
     // onChange ={(event)=>{handleHeightChange(event.target.value)}} 
      disabled/>
    <div className="center">
    <div className="keypad">
      <div className="buttons">
        <div className="button" name="1" onClick={val}>1</div>
        <div className="button" name="2" onClick={val}>2</div>
        <div className="button" name="3" onClick={val}>3</div>
        <div className="button" name="4" onClick={val}>4</div>
        <div className="button" name="5" onClick={val}>5</div>
        <div className="button" name="6" onClick={val}>6</div>
        <div className="button" name="7" onClick={val}>7</div>
        <div className="button" name="8" onClick={val}>8</div>
        <div className="button" name="9" onClick={val}>9</div>
        <div className="button" name="c" onClick={val}>C</div>
        <div className="button" name="0" onClick={val}>0</div>
        <div className="button" name="." onClick={val}>.</div>
      </div>

      </div> 
  </div>
  </>

    
  )
 
}

