import { baseRoute } from "@/components/utils/constants";
import { redirect } from "react-router-dom";

export const PublicPageLoader = () => {
  return redirect(`${baseRoute}/products`);
};

const Public = () => {
  return <h1>PUBLIC</h1>;
};

export default Public;
