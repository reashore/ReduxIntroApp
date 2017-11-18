
import { createStore } from 'redux';
import constants from './constants';

const initialState = {
    count: 0
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case constants.INCREMENT_COUNTER:
        return {
          count: state.count + 1
        };
  
      case constants.DECREMENT_COUNTER:
        return {
          count: state.count - 1
        };
  
      default:
        return state;
    }
  }
  
  const store = createStore(reducer);

  export default store;

  