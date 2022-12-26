import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {useQueryParams} from "./useQueryParams";
import {useInterval} from "./useInterval";
import {calculateDifference} from "./calculateDifference";
import {TimerEntity} from "./TimerEntity";

interface Time {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
}

function App() {
  const { t, i18n } = useTranslation();
  const { title, date, lang } = useQueryParams();
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

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [i18n, lang]);

  return (
    <div className="bg-emerald-300 text-slate-900 h-screen flex flex-col justify-center">
      <header className="text-center text-5xl underline font-bold py-10">
        {title}
      </header>
      {isAfter ? (
          <p className="text-center">{t('Time already passed')}</p>
      ) : (
          <div className="container">
            <ul className="flex mx-auto md:max-w-[40%] w-full justify-between list-none">
              <TimerEntity count={timeLeft?.days} translationKey="days" />
              <TimerEntity count={timeLeft?.hours} translationKey="hours" />
              <TimerEntity count={timeLeft?.minutes} translationKey="minutes" />
              <TimerEntity count={timeLeft?.seconds} translationKey="seconds" />
            </ul>
            <img src="https://www.svgrepo.com/show/195110/clock.svg" alt="clock icon" className="w-[240px] mx-auto mt-10" />
          </div>
      )}
    </div>
  );
}

export default App;
