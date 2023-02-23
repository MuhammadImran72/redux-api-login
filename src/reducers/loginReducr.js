import axios from "axios";
export function handleApi(data) {
  return async (dispatch) => {
    let response = {};
    try {
      response = await axios.post("https://reqres.in/api/login", data);
      console.log(response, "results");
      if (response) {
        dispatch({ type: "LOGIN_SUCCESS", payload: response });
        localStorage.setItem("token", response.data.token);
      } else {
        dispatch({ type: "LOGIN_FAIL" });
        alert("User Enter Invalid Informations");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAIL" });
      alert("User Enter Invalid Informations");
    }
    return response;
  };
}

const loginReducr = (
  state = {
    results: {},
    loginLoading: false,
  },
  action
) => {
  if (action.type === "LOGIN_LOADING") {
    return { ...state, loginLoading: true };
  }

  if (action.type === "LOGIN_SUCCESS") {
    return { ...state, loginLoading: false, results: action.payload };
  }

  if (action.type === "LOGIN_FAIL") {
    return { ...state, loginLoading: false, results: {} };
  }

  return state;
};

export default loginReducr;
