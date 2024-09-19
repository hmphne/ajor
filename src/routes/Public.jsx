import { redirect } from "react-router-dom";

export const PublicPageLoader = () => {
  return redirect("/profile");
};

const Public = () => {
  return <h1>PUBLIC</h1>;
};

export default Public;
