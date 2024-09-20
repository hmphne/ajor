import { useState, useEffect } from "react";

const usePopstate = (initialStep = 1) => {
  const [step, setStep] = useState(initialStep);

  useEffect(() => {
    window.history.pushState({ step }, "", `?step=${step}`);
  }, [step]);

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state?.step) {
        setStep(event.state.step);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  return {
    step,
    nextStep,
    prevStep,
    setStep,
  };
};

export default usePopstate;
