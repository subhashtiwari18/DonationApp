// Populor.jsx
import React from "react";
import './Populor.css';

export default function Populor({ onSetAmount}) {
  return (
    <div className="populor-main">
      <div className="content">
        <h1>Most Popular Donations</h1> 
        <div className="populor-input">
          <button className="btn1" onClick={() => onSetAmount(500)}>500 Rs</button>
          <button className="btn2" onClick={() => onSetAmount(1000)}>1000 Rs</button>
          <button className="btn3" onClick={() => onSetAmount(2000)}>2000 Rs</button>
          <button className="btn3" onClick={() => onSetAmount(5000)}>5000 Rs</button>
          <button className="btn4" onClick={() => onSetAmount(10000)}>10000 Rs</button>
        </div>      
      </div>
    </div>
  );
}
