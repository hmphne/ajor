import { useContext, useState } from "react";
import IconPhone from "../icons/IconPhone";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { LoginContext } from "@/hooks/loginProvider";
import { Link } from "react-router-dom";
import { baseUrl, pattern } from "../utils/constants";

const PhoneNumberStep = ({ nextStep }) => {
  const { formData, updateData } = useContext(LoginContext);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setError(null);
    updateData("phoneNumber", e.target.value);
  };

  const handleNext = () => {
    if (formData.phoneNumber.length === 0) {
      setError("لطفا شماره موبایل خود را وارد کنید");
    } else {
      if (pattern.test(formData.phoneNumber)) {
        nextStep();
      } else {
        setError("فرمت شماره موبایل صحیح نیست");
      }
    }
  };

  return (
    <div className="flex flex-col gap-6 text-sm">
      <p>لطفا شماره تماس خود را در کادر زیر وارد کنید.</p>
      <div className="flex flex-col gap-1">
        <span className="pr-4 text-gray text-xs">شماره تماس</span>
        <Input
          dir="ltr"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="مثال: ۹۱۲۳۴۵۶۷۸۹"
          beforeIcon={<IconPhone />}
          afterIcon="+۹۸"
          type="number"
        />
        {error && <p className="text-red pr-4 text-xs">{error}</p>}
      </div>
      <p className="self-center mt-10">
        اگر ادمین هستید از{" "}
        <Link
          to={`${baseUrl}/admin`}
          className="text-primary underline-offset-4 underline"
        >
          این لینک
        </Link>{" "}
        ورود کنید
      </p>
      <Button onClick={handleNext} className="mt-[113px]">
        ادامه
      </Button>
    </div>
  );
};

export default PhoneNumberStep;
