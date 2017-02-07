import {combineReducers} from 'redux';
import currentSlide from './currentSlide.reducer'

const rootReducer = combineReducers({
  currentSlide
});

export default rootReducer;