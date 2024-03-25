import { API_KEY, BASE_URL } from "./constants";
import { useAppSelector } from "./types/hooksTypes";

export const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err: Error) => Promise.reject(err));
};

export const getRateList = () => {
  // const base = useAppSelector();
  return fetch(`${BASE_URL}RUB`, {
    method: "GET",
    redirect: 'follow',
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "apikey": API_KEY,
    },
  }).then(checkResponse)
  .then(res => res.rates);
};
