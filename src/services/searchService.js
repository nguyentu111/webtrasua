// import * as request from "~/utils/request";
import images from "~/assets/images/bavarage";
const search = async (q, type = "less") => {
  //fetch api here
  // try {
  //     const res = request.get('bavarage/search', {
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
    resolve([
      {
        data: {
          id: 1,
          image: images.trasua,
          name: "Trà sữa phúc long",
          price: "45.000đ",
        },
      },
    ]);
  });
};
export default search;
