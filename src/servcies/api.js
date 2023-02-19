import axios from "axios";

const API_URL = "http://localhost:8000/users";

export const getUsers = async (data) => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error While Calling getUsers Api", error.message);
  }
};
