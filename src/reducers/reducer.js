
// import actions
import { CHANGE_CURRENT_CHART } from '../constants/actions';
import {chartsData} from '../constants/data';

let initialState = {
  currentChart: 1,
  chartsData
}

const chartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_CHART:
      let {currentChart} = action;
      return Object.assign({}, state, { currentChart });
    default:
      return state;
  }
}

export default chartsReducer;
