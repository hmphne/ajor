import { appAuthProvider } from "@/auth";
import { clsx } from "clsx";
import { redirect } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { baseRoute, TOKEN_KEY } from "../components/constants";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function protectedLoader() {
  if (!appAuthProvider.isAuthenticated) {
    return redirect(`${baseRoute}login`);
  }
  return null;
}

export async function loginAction({ request }) {
  const formData = await request.formData();
  const token = formData.get("token");

  if (!token) {
    return {
      error: "Enter the token, genius!",
    };
  }

  try {
    localStorage.setItem(TOKEN_KEY, token);
    await appAuthProvider.signin(token);
  } catch {
    return {
      error: "Invalid login attempt",
    };
  }

  return redirect(`${baseRoute}products`);
}

export async function loginLoader() {
  if (appAuthProvider.isAuthenticated) {
    return redirect(`${baseRoute}products`);
  }
  return null;
}
