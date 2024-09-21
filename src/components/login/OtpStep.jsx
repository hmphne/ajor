import { useContext, useState } from "react";
import Timer from "../Timer";
import { Button } from "../ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { LoginContext } from "@/hooks/loginProvider";
import { initialTimer } from "../utils/constants";

const OtpStep = ({ nextStep }) => {
  const { formData, updateData } = useContext(LoginContext);
  const [error, setError] = useState(null);

  const handleChange = (v) => {
    setError(null);
    updateData("otp", v);
  };

  const handleNext = () => {
    if (formData.otp.length < 5) {
      setError("لطفا کد تایید را به درستی وارد کنید");
    } else {
      nextStep();
    }
  };

  const sendOtp = async () => {
    updateData("otp", "");
  };

  return (
    <div className="text-sm flex flex-col gap-6">
      <p>
        لطفا کد تایید ارسال شده به شماره{" "}
        <span className="text-green">{formData.phoneNumber}</span> را در کادر
        زیر وارد کنید.
      </p>
      <div className="flex flex-col gap-1">
        <span className="pr-4 text-gray text-xs">کد تایید</span>
        <InputOTP maxLength={5} onChange={handleChange} value={formData.otp}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
          </InputOTPGroup>
        </InputOTP>
        {error && <p className="text-red pr-4 text-xs">{error}</p>}
      </div>
      <Timer initSecondsRemaining={initialTimer} onClick={sendOtp} />
      <Button onClick={handleNext} className="mt-[113px]">
        تایید
      </Button>
    </div>
  );
};

export default OtpStep;
