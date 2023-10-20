import { useState, useEffect } from 'react';

const CountUp = ({ targetNumber, step, interval }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentNumber < targetNumber) {
        setCurrentNumber(prevNumber => prevNumber + step);
      } else {
        clearInterval(intervalId);
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentNumber, targetNumber, interval, step]);

  return <div className='font-bold text-red-600 text-xl md:text-2xl lg:text-4xl'>{currentNumber}</div>;
};

export default CountUp;