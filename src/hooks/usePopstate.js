import { useState, useEffect } from "react";

const usePopstate = (initialStep = 1) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.step) {
        setCurrentStep(event.state.step);
      } else {
        setCurrentStep(initialStep);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return {
    currentStep,
    setCurrentStep,
  };
};

export default usePopstate;
