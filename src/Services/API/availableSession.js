import axios from "axios";

const availableSession = async (id) => {
    return await axios.get(`${process.env.REACT_APP_API_KEY}/package/${id}`);
};
export { availableSession };
