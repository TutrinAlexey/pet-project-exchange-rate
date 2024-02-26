import { API_KEY, BASE_URL } from "./constants";

export const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err: Error) => Promise.reject(err));
};

export const getRateList = () => {
    return fetch(`${BASE_URL}/?get=currency_list&key=${API_KEY}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        }
    }).then(checkResponse)
}