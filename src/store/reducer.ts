import { connectRouter } from 'connected-react-router';
import { AnyAction, combineReducers } from 'redux';
import { IState } from '../shared/utilities/interfaces';
// HYGEN-IMPORT

const combinedReducers = (history: any) =>
  combineReducers({
    router: connectRouter(history),
  });// HYGEN-ADD-REDUCER
  // please do not remove this and above comments;
  // they are used by hygen for template generation

const createRootReducer =
  (history: any) => (state: IState, action: AnyAction) => {
    // Reset session state once user logout
    return combinedReducers(history)(state, action);
  };

export default createRootReducer;
