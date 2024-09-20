import { createContext, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    otp: '',
    userType: '',
    name: '',
    city: '',
    address: '',
  });

  const updateData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <LoginContext.Provider value={{ formData, updateData }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
