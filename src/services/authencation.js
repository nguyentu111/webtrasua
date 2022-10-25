// import * as request from "~/utils/request";

const login = async (q, type = "less") => {
  //fetch api here
  // try {
  //     const res = request.get('login/search', {
  //         params: {
  //             q,
  //             type,
  //         },
  //     });
  //     return res;
  // } catch (err) {
  //     console.error('Loi fetchAPI', err);
  // }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(q);
    }, 500);
  });
};
export default login;
