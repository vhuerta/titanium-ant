export const USER_KEY = '@auth.user';
export const TOKEN_KEY = '@auth.token';

export function getUser() {
  return JSON.parse(localStorage.getItem(USER_KEY));
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setUser(user) {
  return localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function setToken(token) {
  return localStorage.setItem(TOKEN_KEY, token);
}

export function unsetUser() {
  return localStorage.removeItem(USER_KEY);
}

export function unsetToken() {
  return localStorage.removeItem(TOKEN_KEY);
}
