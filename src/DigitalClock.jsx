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
    const meridian = hours >= 12 ? "AM" : "PM";

    hours = hours % 12 || 12;

    return `${hours}:${minutes}:${seconds} ${meridian}`;
  };

  return (
    <div className="clock-container">
      <div className="clock">
        <span>00:00:00</span>
      </div>
    </div>
  );
};
export default DigitalClock;
