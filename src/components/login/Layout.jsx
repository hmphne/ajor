import { loginSteps } from "../utils/constants";
import ajor_logo from '@/assets/images/ajor.webp'

const Layout = ({ step, children }) => {
  const title = loginSteps.find((i) => i.id === step).label;

  return (
    <div className="w-full px-4 py-12 flex flex-col">
      <div className="flex justify-between gap-9 items-center mb-16">
        <span className="bg-gray-light font-pelak font-black text-2xl p-8 rounded-40">
          {title}
        </span>
        <img width={80} src={ajor_logo} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
