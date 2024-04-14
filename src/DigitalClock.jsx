import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = () => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const meridian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${parseZero(hours)}:${parseZero(minutes)}:${parseZero(
      seconds
    )} ${meridian}`;
  };
  const parseZero = (number) => {
    let parsed = (number < 10 ? "0" : "") + number;
    return parsed;
  };

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};
export default DigitalClock;
