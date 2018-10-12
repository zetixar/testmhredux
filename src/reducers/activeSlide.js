import { CHANGE_SLIDE } from "constants/ActionTypes"

const initialState = { activeSlideId: 0 }

export default function activeSlide(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SLIDE:
      // return {...state, backgroundColor: action.payload.backgroundColor}
      return {
        ...state,
        activeSlideId: state.activeSlideId > 1 && state.screen.slides
      }

    default:
      return state
  }
}
