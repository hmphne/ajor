import { redirect } from "react-router-dom";

export const PublicPageLoader = () => {
  return redirect("/products");
};

const Public = () => {
  return <h1>PUBLIC</h1>;
};

export default Public;
