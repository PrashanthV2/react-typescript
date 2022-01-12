import { ReducerActionProps } from '../../../../shared/utilities/interfaces';
import {
  GET_USER_DASHBOARD_DATA
} from './actions';

const initialState = {
  // add initial state variables
};

const userDashboardReducer = (state = initialState, action: ReducerActionProps) => {
  switch (action.type) {
    case GET_USER_DASHBOARD_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default userDashboardReducer;
