import { combineReducers } from 'redux';

import appbar from './AppBar/reducer';

const reducer = combineReducers({
  appbar,
});

export default reducer;
