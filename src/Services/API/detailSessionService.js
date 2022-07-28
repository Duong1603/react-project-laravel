import axios from "axios";

const getPackage = async () =>{

    return await axios.get(`${process.env.REACT_APP_API_KEY}/package`);

}
export {getPackage}