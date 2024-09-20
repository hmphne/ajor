import Layout from "@/components/login/Layout";
import OtpStep from "@/components/login/OtpStep";
import PhoneNumberStep from "@/components/login/PhoneNumberStep";
import { LoginContext } from "@/hooks/loginProvider";
import { useContext } from "react";
import useStepNavigation from "@/hooks/usePopState";

const Login = () => {
  const { formData } = useContext(LoginContext);

  const { step, nextStep, prevStep } = useStepNavigation(1);

  return (
    <Layout step={step}>
      {step === 1 && <PhoneNumberStep nextStep={nextStep} />}
      {step === 2 && (
        <OtpStep nextStep={nextStep} prevStep={prevStep} formData={formData} />
      )}
      {step === 3 && <ConfirmOtpStep nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <UserTypeStep nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <UserInfoStep nextStep={nextStep} prevStep={prevStep} />}
      {step === 6 && <AddressStep nextStep={nextStep} prevStep={prevStep} />}
    </Layout>
  );
};

export default Login;
