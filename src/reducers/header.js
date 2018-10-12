import { CHANGE_SLIDE } from 'constants/ActionTypes'

const initialState = {backgroundColor: "black"}

export default function header(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SLIDE:
      // return {...state, backgroundColor: action.payload.backgroundColor}
      return {...state, backgroundColor: state.backgroundColor === "white" ? "black" : "white" }

    default:
      return state
  }
}
