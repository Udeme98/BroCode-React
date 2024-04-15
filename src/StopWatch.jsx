import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elaspedTime, setElapasedTime] = useState(0);
  const intervalId = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      setInterval(() => {
        intervalId.current = setElapasedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalId.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elaspedTime;
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setElapasedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    return `00:00:00`;
  };

  return (
    <div className="stopwatch-body">
      <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button onClick={start} className="start-button">
            Start
          </button>
          <button onClick={stop} className="stop-button">
            Stop
          </button>
          <button onClick={reset} className="reset-button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default StopWatch;
