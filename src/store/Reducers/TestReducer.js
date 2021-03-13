const initialState = {
  users: null,
};

export default function TestReducer(state = initialState, action) {
  switch (action.type) {
    case "DO_THIS":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}
