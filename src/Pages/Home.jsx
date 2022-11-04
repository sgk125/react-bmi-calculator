import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="card-c">
        <div className="card-img-c">
            <img src="https://dl.dropbox.com/s/u3j25jx9tkaruap/Webp.net-resizeimage.jpg?raw=1" />
        </div>
      </div>
    <div className="glass-panel">
          <h1>
            Welcome to KIOSK</h1>
          <p>Choose what you want to Calculate</p>
          <div className="glass-toolbar">
          <div className= "center">
          <div className= "button-wrap">
              

              <Link to="/bmi" >
              <button className="rad-button wwt flat">Calculate BMI</button>
              </Link>
              </div>
              <div className= "button-wrap">
                <Link to='/risk' >
              <button className="pl-5 rad-button wwt flat">Calculate Rate</button></Link>
              </div>
              </div>

          </div>
        </div>
        {/* <Link to='/bmi' >calculate Bmi</Link>
        <Link to='/risk' >calculate Risk</Link> */}

    </div>
  )
}

export default Home