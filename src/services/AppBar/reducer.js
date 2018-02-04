import {
  SHOW_BACK_ARROW,
  HIDE_BACK_ARROW,
  SET_PAGE,
} from './actions';

const initialState = {
  showBackArrow: false,
  backArrowTo: null,
  title: '',
};

function ui(state = initialState, action) {
  switch (action.type) {
    case SHOW_BACK_ARROW:
      return Object.assign({}, state, {
        showBackArrow: true,
        backArrowTo: action.to,
      });
    case HIDE_BACK_ARROW:
      return Object.assign({}, state, {
        showBackArrow: false,
        backArrowTo: null,
      });
    case SET_PAGE:
      return Object.assign({}, state, {
        title: action.title,
      });
    default:
      return state;
  }
}

export default ui;
