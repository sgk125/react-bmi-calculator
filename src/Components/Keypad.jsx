import React from 'react';
import { useState } from 'react';

const Keypad = () => {
    const[text, setText] = useState('');

    function val(event){
        let key = event.target.attributes.name.value;
        //text.value += key;
        if(key == 'c'){
          setText('')
          //text.value = '';
        }else {
          setText(text + key);
          //text.value+= key;
        }
        console.log(key)
      }
  return (
    <div><div className="pad">
    <div className="dial-pad">

      <div className="phoneString">
        <input type="text" disabled id='text' value={text} />
      </div>
      <div className="digits">
        <div className="dig number-dig" name="1" onClick={val}>1</div>
        <div className="dig number-dig" name="2" onClick={val}>2</div>
        <div className="dig number-dig" name="3" onClick={val}>3</div>
        <div className="dig number-dig" name="4" onClick={val}>4</div>
        <div className="dig number-dig" name="5" onClick={val}>5</div>
        <div className="dig number-dig" name="6" onClick={val}>6</div>
        <div className="dig number-dig" name="7" onClick={val}>7</div>
        <div className="dig number-dig" name="8" onClick={val}>8</div>
        <div className="dig number-dig" name="9" onClick={val}>9</div>
        <div className="dig number-dig" name="c" onClick={val}>C</div>
        <div className="dig number-dig" name="0" onClick={val}>0</div>
        <div className="dig number-dig" name="." onClick={val}>.</div>
        {/* <div className="dig number-dig" name="s" onClick={val}>&rarr;</div> */}
      </div>

      </div> 
  </div></div>
  )
}

export default Keypad