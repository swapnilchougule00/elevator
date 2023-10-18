import React, { useState } from "react";
import "./Elevator.css";
import ping from './sounds/ping.mp3'

const Elevator = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [elevatorStyle, setElevatorStyle] = useState({});
  const [isMoving, setIsMoving] = useState(false);

  const elevatorAudio = new Audio(ping);

  const moveElevator = (targetLevel, duration) => {
    setIsMoving(true);
    const distance = (currentLevel - targetLevel) * 250;
    setElevatorStyle({
      transition: `${duration}s linear`,
      transform: `translateY(${distance}px)`,
    });

    setTimeout(() => {
      elevatorAudio.play();
      setIsMoving(false);
    }, duration * 1000);
  };

  function levelZeroAndTwo(targetLevel, duration) {
    var distance = (currentLevel - targetLevel) * 250;
  
    setElevatorStyle({
      transition: `${duration}s linear`,
      transform: `translateY(${distance}px)`,
    });
    setTimeout(() => {
      elevatorAudio.play();
      setIsMoving(false);
    }, duration * 1000);
  }



  const handleLevel1UpClick = () => {
    if (currentLevel !== 1) {
      moveElevator(1, 5);
    }
  };

  const handleLevel1DownClick = () => {
    if (currentLevel !== 1) {
      moveElevator(1, 5);
    }
  };
  
  return (
    <div className="main">
      <h1 className="heading">Elevator</h1>
      <div className="flex">
        <div className="lift-buttons">
          <div className="level-2-btn">
            <button
              id="level-2-down-button"
              onClick={() => levelZeroAndTwo(0, 10)}
            >
              ˅
            </button>
          </div>
          <div className="level-1-btn">
            <button id="level-1-up-btn" onClick={() => handleLevel1UpClick()}>
              ˄
            </button>
            <button
              id="level-1-down-btn"
              onClick={() => handleLevel1DownClick()}
            >
              ˅
            </button>
          </div>
          <div className="level-0-btn">
            <button id="level-0-up-btn" onClick={() => levelZeroAndTwo(2, 10)}>
              ˄
            </button>
          </div>
        </div>
        <div className="levels">
          <div
            className={`level2 ${currentLevel === 2 ? "active" : ""}`}
            id="level2"
          >
            <p>Level 2</p>
          </div>
          <div
            className={`level1 ${currentLevel === 1 ? "active" : ""}`}
            id="level1"
          >
            <p>Level 1</p>
          </div>
          <div
            className={`level0 ${currentLevel === 0 ? "active" : ""}`}
            id="level0"
          >
            <p>Ground Level</p>
            <div className="elevator" id="elevator" style={elevatorStyle}><span className="line"></span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elevator;
