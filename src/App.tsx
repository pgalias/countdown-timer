import React, {useState} from 'react';
import {useQueryParams} from "./useQueryParams";
import {useInterval} from "./useInterval";
import {calculateDifference} from "./calculateDifference";

interface Time {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
}

function App() {
  const { title, date } = useQueryParams();
  const [isAfter, setIsAfter] = useState(false);
  const [timeLeft, setTimeLeft] = useState<Time>();

  useInterval(() => {
    const difference = calculateDifference(new Date(date));

    if (difference === -1) {
      setIsAfter(true);
      return;
    }

    setTimeLeft(difference);
  });

  return (
    <div className="bg-emerald-300 text-slate-900 h-screen flex flex-col justify-center">
      <header className="text-center text-5xl underline font-bold py-10">
        {title}
      </header>
      {isAfter ? (
          <p>Time already passed</p>
      ) : (
          <>
            <ul className="flex mx-auto md:max-w-[40%] w-full justify-between list-none">
              <li><p className="text-md"><strong className="text-3xl">{timeLeft?.days}</strong> days</p></li>
              <li><p className="text-md"><strong className="text-3xl">{timeLeft?.hours}</strong> hours</p></li>
              <li><p className="text-md"><strong className="text-3xl">{timeLeft?.minutes}</strong> minutes</p></li>
              <li><p className="text-md"><strong className="text-3xl">{timeLeft?.seconds}</strong> seconds</p></li>
            </ul>
            <img src="https://www.svgrepo.com/show/195110/clock.svg" alt="clock icon" className="w-[240px] mx-auto mt-10" />
          </>
      )}
    </div>
  );
}

export default App;
