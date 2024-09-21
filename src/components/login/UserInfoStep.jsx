import { useContext, useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { LoginContext } from "@/hooks/loginProvider";
import { Button } from "../ui/button";

const UserInfoStep = ({ nextStep }) => {
  const { formData, updateData } = useContext(LoginContext);
  const [error, setError] = useState({});

  const handleChange = (field, value) => {
    setError((prev) => ({ ...prev, [field]: null }));
    updateData(field, value);
  };

  const handleNext = () => {
    const newError = {
      ...(!formData.name && {
        name: "لطفا نام و نام خانوادگی خود را وارد کنید",
      }),
      ...(!formData.city && { city: "لطفا شهر خود را انتخاب کنید" }),
    };

    if (Object.keys(newError).length > 0) {
      setError(newError);
    } else {
      nextStep();
    }
  };

  return (
    <div className="text-sm flex flex-col gap-6">
      <p>لطفا نام، نام خانوادگی و شهر خود را وارد کنید.</p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="pr-4 text-xs text-gray">
            نام و نام خانوادگی
          </label>
          <Input
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {error.name && <p className="text-red pr-4 text-xs">{error.name}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="city" className="pr-4 text-xs text-gray">
            شهر
          </label>
          <Select
            value={formData.city}
            onValueChange={(value) => handleChange("city", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="نام شهر" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tehran">تهران</SelectItem>
              <SelectItem value="shiraz">شیراز</SelectItem>
              <SelectItem value="rasht">رشت</SelectItem>
            </SelectContent>
          </Select>
          {error.city && <p className="text-red pr-4 text-xs">{error.city}</p>}
        </div>
      </div>
      <Button onClick={handleNext} className="mt-[113px]">
        ادامه
      </Button>
    </div>
  );
};

export default UserInfoStep;
