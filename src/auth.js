import { TOKEN_KEY } from "./lib/constants";

export const appAuthProvider = {
  isAuthenticated: !!localStorage.getItem(TOKEN_KEY),
  token: null,
  async signin(token) {
    appAuthProvider.isAuthenticated = true;
    appAuthProvider.token = token;
  },
  async signout() {
    localStorage.removeItem(TOKEN_KEY);
    appAuthProvider.isAuthenticated = false;
    appAuthProvider.token = null;
  },
};
