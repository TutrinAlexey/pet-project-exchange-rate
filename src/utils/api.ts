import { API_KEY, BASE_URL } from "./constants";
import { TRates } from "./types/ratesTypes";

export const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err: Error) => Promise.reject(err));
};

export const getRateList = (base:string) => {
  return fetch(`${BASE_URL}${base}`, {
    method: "GET",
    redirect: 'follow',
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "apikey": API_KEY,
    },
  }).then(checkResponse)
  .then(res => res.rates as TRates);
};
