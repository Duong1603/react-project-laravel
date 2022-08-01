import axios from "axios";

const availableSession = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API_KEY}/package/${id}`);
};
const apiBooked = async () => {
  return await axios.get(`${process.env.REACT_APP_API_KEY}/booking`);
};
const calculateFee = async ()=>{
  return await axios.get(`${process.env.REACT_APP_API_KEY}/payment`);
}
const calculateFeeQr = async ()=>{
  return await axios.get(`${process.env.REACT_APP_API_KEY}/payment-qr`)
}
export { availableSession, apiBooked,calculateFee,calculateFeeQr };
