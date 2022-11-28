// import * as request from "~/utils/request";
import images from "~/assets/images/bavarage";
const search = async (q, signal) => {
  //fetch api here
  // try {
  //     const res = request.get('bavarage/search', {
  //         params: {
  //             q,
  //             type,
  //         },
  //          signal:signal
  //     });
  //     return res;
  // } catch (err) {
  //     console.error('Loi fetchAPI', err);
  // }
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => {
            return {
              data: {
                id: i,
                image: images.trasua,
                name: "Trà sữa phúc long",
                price: "45.000đ",
              },
            };
          })
        ),
      1500
    );
  });
};

export default search;
