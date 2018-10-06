import { CHANGE_HEADER_BACKGROUND_COLOR } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const changeHeaderBackgroundColor = createAction(CHANGE_HEADER_BACKGROUND_COLOR)

// export const decrement = createAction(DECREMENT_COUNTER)

// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState()

//     if (counter % 2 === 0) {
//       return
//     }

//     dispatch(increment())
//   }
// }
