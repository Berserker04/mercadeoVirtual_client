import { TOKEN } from "../constants/services";

export const Token = (token) => ({
  type: TOKEN,
  token,
});

export const setStorage = (key, item) => {
  try {
    localStorage.setItem(key, item);
  } catch (error) {
    console.log(error);
  }
};

export const delStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
                  