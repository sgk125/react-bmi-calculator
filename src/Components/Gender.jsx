import React, { useState } from 'react'
import {Row, Col} from 'react-bootstrap'

const Gender = () => {
  const[gender, setGender] = useState('f');
    const handleChange = (event) => {
      setGender(event.target.value);
      console.log(gender);
    };
  
  return (
    <div><Row className="align-items-center">
    <Col>
      <label className="container-c">
      <input type="radio" name="radio" id="f" value='f' onChange={handleChange}/><p className="text">സ്ത്രീ</p>
        <span className="checkmark"></span>
      </label>
    </Col>
    <Col>
      <label className="container-c">
      <input type="radio" name="radio" id="m" value='m' onChange={handleChange} /><p className="text">ആൺ</p>
        <span className="checkmark"></span>
      </label>
    </Col>
  </Row>
  </div>
  )
}

export default Gender