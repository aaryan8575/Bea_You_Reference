export const wishlistInitialState = {
  items: [],
}

const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOAD_WISHLIST":
      return payload

    default:
      return state
  }
}

export default wishlistReducer
