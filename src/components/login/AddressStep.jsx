import { useContext, useState } from "react";
import Textarea from "../ui/textarea";
import { LoginContext } from "@/hooks/loginProvider";
import { Button } from "../ui/button";

const AddressStep = ({ nextStep }) => {
  const { formData, updateData } = useContext(LoginContext);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setError(null);
    updateData("address", e.target.value);
  };

  const handleNext = () => {
    if (!formData.address) {
      setError("لطفا آدرس خود را وارد کنید");
    } else {
      nextStep();
    }
  };

  return (
    <div className="text-sm flex flex-col gap-6">
      <p>لطفا آدرس محل دریافت بار را وارد کنید.</p>
      <Textarea
        label="آدرس"
        rows={7}
        className="h-[140px] rounded-lg border border-input focus:outline-none px-3 py-3 resize-none"
        onChange={handleChange}
        value={formData.address}
        error={error}
      />
    
      <Button onClick={handleNext} className="mt-[113px]">
        ادامه
      </Button>
    </div>
  );
};

export default AddressStep;
