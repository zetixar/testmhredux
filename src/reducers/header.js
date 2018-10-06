import { CHANGE_HEADER_BACKGROUND_COLOR } from 'constants/ActionTypes'

const initialState = {backgroundColor: "black"}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_HEADER_BACKGROUND_COLOR:
      // return {...state, backgroundColor: action.payload.backgroundColor}
      return {...state, backgroundColor: state.backgroundColor === "white" ? "black" : "white" }

    default:
      return state
  }
}
