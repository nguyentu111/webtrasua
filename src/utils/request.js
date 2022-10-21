import axios from 'axios';
const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL, //lâý url từ file .env.development
});
export const get = async (path, options = {}) => {
    // có hàm này thì lúc nhận dữ liệu ko cần gọi request.data.data mà chỉ cần request.data
    const response = await request.get(path, options);
    return response.data;
};

export default request;
