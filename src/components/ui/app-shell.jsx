import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { baseRoute } from "../utils/constants";
import { navItems } from "../utils/utils";
import IconUser from "../icons/IconUser";
import ajor_logo from "@/assets/images/ajor.webp";
import { Button } from "./button";
import NotifMenu from "../NotifMenu";

const Appshell = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const route = pathname.split(baseRoute)[1];

  const onIconClick = () => {
    navigate(baseRoute + "/profile");
  };

  return (
    <div className="h-dvh flex flex-col">
      <header className="flex justify-between items-center fixed top-0 h-16 w-full z-10 px-4 py-5">
        <div className="flex items-center gap-4">
          <Button variant="text" size="icon" onClick={onIconClick}>
            <IconUser />
          </Button>
          <NotifMenu />
        </div>
        <img width={48} src={ajor_logo} />
      </header>
      <div className="flex-grow mt-16 mb-[88px] overflow-y-auto">
        {children}
      </div>
      <nav className="flex justify-between fixed bottom-0 h-[88px] w-full p-4 z-10">
        {navItems.map((item) => {
          return (
            <NavLink
              key={item.label}
              to={baseRoute + item.to}
              className={`${
                item.to === route ? "text-primary" : "text-foreground"
              } text-xs flex flex-col gap-1 items-center justify-center w-[50px]`}
            >
              <item.icon
                fill={`${item.to === route ? "#E84E24" : "#242424"}`}
              />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Appshell;
