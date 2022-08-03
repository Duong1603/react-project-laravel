import axios from "axios";

const availableSession = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API_KEY}/package/${id}`);
};
const apiBooked = async () => {
  return await axios.get(`${process.env.REACT_APP_API_KEY}/booking`);
};
const calculateFee = async () => {
  return await axios.get(`${process.env.REACT_APP_API_KEY}/payment`);
};
const calculateFeeQr = async () => {
  return await axios.get(`${process.env.REACT_APP_API_KEY}/payment-qr`);
};
const getBlogs = async (id) => {
  const requestBlogs = axios.get(
    `${process.env.REACT_APP_API_KEY}/posts/search?${id ? `cateId=${id}` : ""}`
  );
  const requestCategories = axios.get(
    `${process.env.REACT_APP_API_KEY}/categories`
  );
  return await axios.all([requestBlogs,requestCategories]);
};
const searchType = async (keyword) =>{
  return await axios.get(`http://127.0.0.1:8000/api/posts/search?title=${keyword}`)
}
export { availableSession, apiBooked, calculateFee, calculateFeeQr, getBlogs ,searchType};
