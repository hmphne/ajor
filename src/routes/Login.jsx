import Layout from "@/components/login/Layout";
import OtpStep from "@/components/login/OtpStep";
import PhoneNumberStep from "@/components/login/PhoneNumberStep";
import UserInfoStep from "@/components/login/UserInfoStep";
import UserTypeStep from "@/components/login/UserTypeStep";
import { LoginContext } from "@/hooks/loginProvider";
import usePopstate from "@/hooks/usePopstate";
import { useContext } from "react";

const Login = () => {
  const { formData } = useContext(LoginContext);

  const { currentStep, setCurrentStep } = usePopstate(1);

  const handleNext = () => {
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);

    window.history.pushState({ step: nextStep }, `Step ${nextStep}`, "");
  };

  console.log(formData);

  return (
    <Layout step={currentStep}>
      {currentStep === 1 && <PhoneNumberStep nextStep={handleNext} />}
      {currentStep === 2 && <OtpStep nextStep={handleNext} />}
      {/* TODO: Check if user already exists then skip the last 3 steps */}
      {currentStep === 3 && <UserTypeStep nextStep={handleNext} />}
      {currentStep === 4 && <UserInfoStep nextStep={handleNext} />}
      {currentStep === 5 && <AddressStep nextStep={handleNext} />}
    </Layout>
  );
};

export default Login;
