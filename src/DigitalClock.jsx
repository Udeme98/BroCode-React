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

  return (
    <div className="clock-container">
      <div className="clock">
        <span>00:00:00</span>
      </div>
    </div>
  );
};
export default DigitalClock;
