const homeReducr = (state = { count: 1 }, action) => {
  if (action.type === "ADD") {
    return { count: action.payload };
  }

  if (action.type === "SUB") {
    return { count: action.payload };
  }

  return state;
};

export default homeReducr;
