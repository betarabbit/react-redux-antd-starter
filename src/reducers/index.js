import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import menuReducer from './menu-reducer';

const rootReducer = combineReducers({
  form: formReducer,
  menu: menuReducer,
});

export default rootReducer;
