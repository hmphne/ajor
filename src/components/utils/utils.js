import IconCart from "../icons/IconCart";
import IconInquiry from "../icons/IconInquiry";
import IconOrder from "../icons/IconOrder";
import IconProducts from "../icons/IconProducts";

export const formatSecondsToMinutes = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
};

export const navItems = [
  { label: "محصولات", to: "/products", icon: IconProducts },
  { label: "سبد خرید", to: "/cart", icon: IconCart },
  { label: "استعلام", to: "/inquiry", icon: IconInquiry },
  { label: "سفارش", to: "/order", icon: IconOrder },
];