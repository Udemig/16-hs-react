const initialState = {
  theme: "dark",
  language: "tr",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEMA_DEĞİŞ":
      return state;

    case "DİL_DEĞİŞ":
      return state;

    default:
      return state;
  }
};

export default themeReducer;
