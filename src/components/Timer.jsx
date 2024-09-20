import { ReloadIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Timer = ({ initSecondsRemaining, onClick }) => {
  const [secondsRemaining, setSecondsRemaining] =
    useState(initSecondsRemaining);

  useEffect(() => {
    setSecondsRemaining(initSecondsRemaining);
  }, [initSecondsRemaining]);

  useEffect(() => {
    const updateTimer = () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [secondsRemaining]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };
  return (
    <div className="md:relative md:top-0 flex self-center text-xs md:text-sm text-[#878892] md:mt-2">
      {secondsRemaining > 0 ? (
        <span className="mt-3 mb-1">
          {formatTime(secondsRemaining)} تا امکان درخواست مجدد کد
        </span>
      ) : (
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            className="font-normal pl-0"
            onClick={() => {
              setSecondsRemaining(initSecondsRemaining);
              onClick();
            }}
          >
            ارسال مجدد کد تایید
          </Button>
          <ReloadIcon className="text-primary" />
        </div>
      )}
    </div>
  );
};

export default Timer;
