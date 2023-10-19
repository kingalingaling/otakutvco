import { useState, useEffect, useMemo } from "react";

const Timer = ({ eventDate }) => {
  const targetDate = useMemo(() => new Date(eventDate), [eventDate]); // Target date and time

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="flex mx-auto w-1000 relative">
      {/* Days */}
      <div className="flex-shrink-0 time-part-wrapper">
        <div className="time-part days">
          <div className="digit-wrapper flex flex-col items-center">
            <span className="digit text-2xl font-bold ">
              {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
            </span>
            <div className="text-center">Days</div>
          </div>
        </div>
      </div>

      {/* Hours */}
      <div className="flex-shrink-0 time-part-wrapper mx-3">
        <div className="time-part hours">
          <div className="digit-wrapper flex flex-col items-center">
            <span className="digit text-2xl font-bold">
              {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
            </span>
            <div className="text-center">Hours</div>
          </div>
        </div>
      </div>

      {/* Minutes */}
      <div className="flex-shrink-0 time-part-wrapper">
        <div className="time-part minutes">
          <div className="digit-wrapper flex flex-col items-center">
            <span className="digit text-2xl font-bold">
              {timeLeft.minutes < 10
                ? `0${timeLeft.minutes}`
                : timeLeft.minutes}
            </span>
            <div className="text-center">Minutes</div>
          </div>
        </div>
      </div>

      {/* Seconds */}
      <div className="flex-shrink-0 time-part-wrapper ml-3">
        <div className="time-part seconds">
          <div className="digit-wrapper flex flex-col items-center">
            <span className="digit text-2xl font-bold">
              {timeLeft.seconds < 10
                ? `0${timeLeft.seconds}`
                : timeLeft.seconds}
            </span>
            <div className="text-center">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
