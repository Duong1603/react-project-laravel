import axios from "axios";

const postContact = async (data) =>{

    return await axios.post(`${process.env.REACT_APP_API_KEY}/contact`,data);

}
export {postContact}