import { useState } from "react";
import { Button } from "./Button";

export const StopWatchTimer = () => {

    const[currentTime, setCurrentTime] = useState(0);
    const[myTimer, setMyTimer] = useState(0);

    const startTime = () => {

        setMyTimer(setInterval(() => {
            setCurrentTime((p) => p + 1);
          }, 1000));
        
    }
    const stopTime = () =>{
        console.log(myTimer);
        clearInterval(myTimer);
    }
    const resetTime = () =>{
        stopTime();
        setCurrentTime(0);
    }
    

  return (
    <div>
      <h1>Timer: { currentTime }</h1>
      <Button timer={ startTime } color='green'>Start</Button>
      <Button timer={ stopTime } color='red'>Stop</Button>
      <Button timer={ resetTime } color='yellow'>Reset</Button>
    </div>
  );
};
