import { LoginContext } from "@/hooks/loginProvider";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useContext, useState } from "react";

const UserTypeStep = ({ nextStep }) => {
  const { formData, updateData } = useContext(LoginContext);
  const [error, setError] = useState(null);

  const handleChange = (v) => {
    setError(null);
    updateData("userType", v);
  };

  const handleNext = () => {
    if (formData.userType) {
      nextStep();
    } else {
      setError("لطفا نوع همکاری خود را انتخاب کنید");
    }
  };

  return (
    <div className="text-sm flex flex-col gap-8">
      <p>لطفا نوع همکاری خود را مشخص کنید.‍</p>
      <RadioGroup
        defaultValue={formData.userType}
        className="gap-4"
        onValueChange={handleChange}
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem value="representative" id="op-1" />
          <label htmlFor="op-1">نماینده شرکت هستم</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="buyer" id="op-2" />
          <label htmlFor="op-2">خریدار عمده هستم</label>
        </div>
      </RadioGroup>
      {error && <p className="text-red pr-4 text-xs">{error}</p>}
      <Button onClick={handleNext} className="mt-[113px]">
        ادامه
      </Button>
    </div>
  );
};

export default UserTypeStep;
