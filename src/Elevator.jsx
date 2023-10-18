import React, { useState } from "react";
import "./Elevator.css";

const Elevator = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [elevatorStyle, setElevatorStyle] = useState({});
  const [isMoving, setIsMoving] = useState(false);

  const moveElevator = (targetLevel, duration) => {
    setIsMoving(true);
    console.log(currentLevel)
    const distance = (currentLevel - targetLevel) * 250;
    setElevatorStyle({
      transition: `${duration}s linear`,
      transform: `translateY(${distance}px)`,
    });

    setTimeout(() => {
      setCurrentLevel(targetLevel);
      setIsMoving(false);
    }, duration * 1000);
  };

  let groundFloor = 0;
  let nextFloor;

  function levelZeroGoUp(targetLevel, duration) {
    // nextFloor = 2;
    var distance = (currentLevel - targetLevel) * 250 - 3;
    elevator.style["transition"] = "10s linear";
    elevator.style.transform = "translateY(" + distance + "px)";
    setElevatorStyle({
      transition: `${duration}s linear`,
      transform: `translateY(${distance}px)`,
    });
    setTimeout(() => {
        // setCurrentLevel(targetLevel);
        setIsMoving(false);
    }, duration * 1000);
  }

  const handleUpClick = (level, duration) => {
    if (level !== currentLevel && !isMoving) {
      moveElevator(level, duration);
    }
  };

  const handleDownClick = (level, duration) => {
    if (level !== currentLevel && !isMoving) {
      moveElevator(level, duration);
    }
  };

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
  console.log(elevatorStyle)
  return (
    <div className="main">
      <h1 className="heading">Koolio Frontend Task</h1>
      <div className="lift-buttons">
        <div className="level-2-btn">
          <button id="level-2-down-button" onClick={() => levelZeroGoUp(0, 10)}>
            down
          </button>
        </div>
        <div className="level-1-btn">
          <button id="level-1-up-btn" onClick={() => handleLevel1UpClick()}>
            up
          </button>
          <button id="level-1-down-btn" onClick={() => handleLevel1DownClick()}>
            down
          </button>
        </div>
        <div className="level-0-btn">
          <button id="level-0-up-btn" onClick={() => levelZeroGoUp(2, 10)}>
            up
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
          <div className="elevator" id="elevator" style={elevatorStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default Elevator;
