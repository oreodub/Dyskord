import { combineReducers } from 'redux';
import sessionErrorsReducer from './users_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer
});

export default errorsReducer;