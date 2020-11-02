export const UserReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};
