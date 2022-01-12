import { AppDispatch } from '../../../../store/store';

export const GET_USER_DASHBOARD_DATA = 'GET_DASHBOARD_DATA';

export function GetUserDashboard () {
  return (dispatch: AppDispatch) => {
    // perform actions
    dispatch({
      type: GET_USER_DASHBOARD_DATA,
      payload: {
        // add payload here
      },
    });
  };
};
