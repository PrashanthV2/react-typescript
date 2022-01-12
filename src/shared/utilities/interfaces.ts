/* eslint-disable no-unused-vars */
import { RouterState } from 'connected-react-router';
import { AlertColor } from '@mui/material';
import { AppDispatch } from '../../store/store';

export interface ReducerActionProps {
  type: string;
  payload?: any;
}

export type FunctionDispatchType = (dispatch: AppDispatch) => void;
export type ActionDispatchType = (dispatch: any) => Promise<void>;

export type DispatchType = (
  args: ReducerActionProps | FunctionDispatchType
) => void;

export interface IModalData {
  message: string | string[];
  severity: AlertColor;
  alertTitle: string;
  strongText?: string;
}

export interface IApp {
  themeMode: string;
  isLoading: boolean;
  info: unknown;
  isShowingModal: boolean;
  modalData: IModalData;
}

export interface IAuth {
  status: string;
  isLoggedIn: boolean;
  accessToken: string;
  refreshToken: string;
  userId: string;
  sessionExpired: any;
  accountType: string;
  userData: any;
}

export interface IState {
  app: IApp;
  router: RouterState;
  auth: IAuth;
} // HYGEN-UPDATE

