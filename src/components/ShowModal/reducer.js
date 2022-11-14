export const initialState = { error: "", success: "", serverErr: "" };

export function reducer(state, action) {
  switch (action.type) {
    case "error":
      return { ...state, error: action.payload };
    case "success":
      return { ...state, success: action.payload };
    case "initial":
      return { ...state, ...initialState };
    default:
      throw new Error();
  }
}