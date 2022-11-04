import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

const RiskCalc = () => {
  // const btn = document.querySelectorAll(".buttons > div");
  var inpW = document.getElementById("weight");
  var inpH = document.getElementById("height");


// function inpWeight(){
  
// inpH.blur();
// btn.forEach()
// }

// function inpHeight() {
//   inpW.blur();
//   btn.forEach(val=>{
//     val.addEventListener("click", ()=>{
//      inpH.value+=val.innerText;
//   })
//   })
// }

// function calculateBMI() {

//   let result = document.querySelector("#result");

//   if (inpH === "" || isNaN(inpH)) 
//       result.innerHTML = "Provide a valid Height!";

//   else if (inpW === "" || isNaN(inpW)) 
//       result.innerHTML = "Provide a valid Weight!";
//   // If both input is valid, calculate the bmi
//   else {
//       // Fixing upto 2 decimal places
//       let bmi = (inpW / ((inpH * inpH)/ 10000)).toFixed(2);

//       // Dividing as per the bmi conditions
//       if (bmi < 18.6) result.innerHTML =
//           `Under Weight : <span>${bmi}</span>`;

//       else if (bmi >= 18.6 && bmi < 24.9) 
//           result.innerHTML = `Normal : <span>${bmi}</span>`;

//       else result.innerHTML = `Over Weight : <span>${bmi}</span>`;
//   }
//}
  return (
    <div>
      <div className="card-c">
        <div className="card-img-c">
            <img src="https://dl.dropbox.com/s/u3j25jx9tkaruap/Webp.net-resizeimage.jpg?raw=1" />
        </div>
      </div>
    <div className="glass-panel">
          {/* <h3>നിങ്ങളുടെ BMI കണക്കാക്കുക</h3> */}
          <div className="glass-toolbar">
            <div className= "center">
                <form className='mt-3' >
                  <Row className="align-items-center">
                    <Col>
                      <label className="container-c">
                      <input type="radio" name="radio" id="f" /><p className="text">സ്ത്രീ</p>
                        <span className="checkmark"></span>
                      </label>
                    </Col>
                    <Col>
                      <label className="container-c">
                      <input type="radio" name="radio" id="m" /><p className="text">ആൺ</p>
                        <span className="checkmark"></span>
                      </label>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <p>ഭാരം കിലോയിൽ</p>
                    </Col>
                    <Col>
                      <input type="text" className="text-input" id="weight"  required
                     
                      />
                    </Col>
                    <Col>
                      <p>ഉയരം സെ.മീ</p></Col><Col>
                      <input type="text" className="text-input" id="height" 
                        required  />
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col xs lg="2" className="align-items-center">
                  <input type="button" value="submit" className="pl-5 rad-button wwt flat" />
                    </Col>
                    
                  </Row>
                  
                </form>
                <div id="result"></div>
              
              {/* <div className='slider-parent'>
                <input type="range" min="2" max="200" value={weight}
                      onChange={({ target: { value: radius } }) => {
                      onChangeW(radius);
                  }} />
                  <div className="buble">{weight} Kg</div>
              </div>
              <div className='slider-parent'>
                <input type="range" min="30" max="220" value={height}
                      onChange={({ target: { value: cm } }) => {
                      onChangeH(cm);
                  }} />
                  <div className="height">{height} Cm</div>
              </div> */}

            </div>
            <div className='keypad' >
                <div className="buttons">
                  <div className="button" id='1'>1</div>
                  <div className="button" id='2'>2</div>
                  <div className="button" id='3'>3</div>
                  <div className="button" id='4'>4</div>
                  <div className="button" id='5'>5</div>
                  <div className="button" id='6'>6</div>
                  <div className="button" id='7'>7</div>
                  <div className="button" id='8'>8</div>
                  <div className="button" id='9'>9</div>
                  <div className="button">&larr;</div>
                  <div className="button" id='0'>0</div>
                  <div className="button">&rarr;</div>
                </div>
              </div>

          </div>
    </div>
    </div>
  )
}

export default RiskCalc