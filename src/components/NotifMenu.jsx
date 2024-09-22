import { useState } from "react";
import IconNotif from "./icons/IconNotif";
import indicator from "@/assets/images/indicator.png";

const NotifMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dummy = [
    { msg: "پاسخ استعلام سبد خرید شما مشخص شده است." },
    { msg: "تا تاریخ ۱۶ بهمن، امکان بارگیری و ارسال توسط شرکت وجود ندارد." },
    {
      msg: "به علت مشکلات فنی، تا ۳ روز آینده امکان مشاهده، ویرایش و یا ثبت سفارش جدید مقدور نیست.",
    },
    { msg: "وضعیت سفارش ON3280 به «در انتظار بارگیری» تغییر کرد." },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="py-2 rounded-full focus:outline-none"
      >
        <IconNotif />
      </button>

      <div
        className={`absolute right-4 mt-2 w-80 bg-gray-light border border-input rounded-lg z-50 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <span className="absolute -top-3 right-[37px]">
          <img src={indicator} />
        </span>

        <ul className="flex flex-col max-h-[339px] overflow-y-auto">
          {dummy.length > 0 ? (
            dummy.map((item, index) => (
              <li
                key={index}
                className="mx-4 py-5 text-xs border-b border-dashed border-input last:border-none"
              >
                {item.msg}
              </li>
            ))
          ) : (
            <li className="px-4 py-5 text-xs">پیامی برای نمایش وجود ندارد.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NotifMenu;
