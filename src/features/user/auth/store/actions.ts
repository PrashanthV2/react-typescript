import { AppDispatch } from '../../../../store/store';

export const GET_USER_AUTH_DATA = 'GET_AUTH_DATA';

export function GetUserAuth () {
  return (dispatch: AppDispatch) => {
    // perform actions
    dispatch({
      type: GET_USER_AUTH_DATA,
      payload: {
        // add payload here
      },
    });
  };
};
