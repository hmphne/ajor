import { ReloadIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { formatSecondsToMinutes } from "./utils/utils";

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

  return (
    <div className="flex self-center text-xs text-gray">
      {secondsRemaining > 0 ? (
        <span className="h-5">
          {formatSecondsToMinutes(secondsRemaining)} تا امکان درخواست مجدد کد
        </span>
      ) : (
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            className="font-normal pl-0 py-0 h-auto"
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
