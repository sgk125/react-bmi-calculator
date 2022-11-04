import React from 'react'
import { Link } from 'react-router-dom';
import Controller from '../Components/Controller'

const BmiCalc = () => {
  return (
    <div>
        <div className="card-c">
        <div className="card-img-c">
            <img src="https://dl.dropbox.com/s/u3j25jx9tkaruap/Webp.net-resizeimage.jpg?raw=1" />
        </div>
      </div>
    <div className="glass-panel">

          <div className="glass-toolbar">
          <div className= "center">
          
              
        <Controller />

          </div>
        </div>
    </div>
    </div>
  )
}

export default BmiCalc