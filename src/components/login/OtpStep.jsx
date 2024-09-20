import Timer from "../Timer";
import { Button } from "../ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const OtpStep = ({ formData, nextStep }) => {
  const handleNext = () => {
    nextStep();
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
        <InputOTP maxLength={5}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Timer />
      <Button onClick={handleNext} className='mt-[113px]'>تایید</Button>
    </div>
  );
};

export default OtpStep;
