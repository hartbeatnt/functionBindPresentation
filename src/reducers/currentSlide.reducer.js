import * as actions from '../actions/actiontypes'

const defaultState = {
  slide: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.NEXT_SLIDE:
      return ({...state, slide: state.slide + 1});
    default:
      return state;
  }
}