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
        `${process.env.REACT_APP_API_KEY}/posts/`
    );
    const requestCategories = axios.get(
        `${process.env.REACT_APP_API_KEY}/categories`
    );
    return await axios.all([requestBlogs, requestCategories]);
};
const searchType = async (keyword) => {
    return await axios.get(
        `${process.env.REACT_APP_API_KEY}/posts/search?title=${keyword}`
    );
};
const submit = async (data) => {
    return await axios.post(`${process.env.REACT_APP_API_KEY}/add-booking`,data);
};
const feedbackCustomer = async (query)=>{
    return await axios.get(`${process.env.REACT_APP_API_KEY}/comment?${query}`)
}
const getPackages = async ()=>{
    return await axios.get(`${process.env.REACT_APP_API_KEY}/package`)
}
export {
    availableSession,
    apiBooked,
    calculateFee,
    calculateFeeQr,
    getBlogs,
    searchType,
    submit,
    feedbackCustomer,
    getPackages
};
