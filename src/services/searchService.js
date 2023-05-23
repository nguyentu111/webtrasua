import * as request from "~/utils/request";
import images from "~/assets/images/bavarage";
import axios from "axios";
import { dataDrinks } from "../constant/fakedata";

const search = async (q, signal) => {
  //fetch api here
  // try {
  //   const res = axios.get(
  //     "https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/drinks",
  //     {
  //       params: {
  //         search: q,
  //       },
  //       signal,
  //     }
  //   );
  //   return res;
  // } catch (err) {
  //   console.error("Loi fetchAPI", err);
  // }
  console.log(dataDrinks.filter((drink) => drink.name.includes(q)));
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          dataDrinks.filter((drink) =>
            drink.name.toLocaleLowerCase().includes(q.toLocaleLowerCase())
          )
        ),
      1000
    )
  );
};

const searchSmart = (mood) => {
  var bodyFormData = new FormData();
  bodyFormData.append("answer_mood", mood);
  return new Promise(async (resolve) => {
    let data = await fetch("http://127.0.0.1:5000", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: bodyFormData,
    });
    data = await data.json();
    let list = await fetch(
      "https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/orders/get-list-predict",
      {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          category_id: data.name,
        }),
      }
    );
    list = await list.json();
    data = { ...data, list: list };
    resolve(data);
  });
};
export const searchMood = searchSmart;
export default search;
