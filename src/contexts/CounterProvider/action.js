import * as types from './types'

export const incrementCount = dispatch => {
  dispatch({ type: types.INCREMENT_COUNTER })
}

export const decrementCount = dispatch => {
  dispatch({ type: types.DECREMENT_COUNTER })
}
