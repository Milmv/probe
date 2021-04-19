import { RootState } from '../store';
import { LoadingStatus } from '../types';
import { UsersState } from './types/state';

export const usersState = (state: RootState): UsersState => state.users;

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
usersState(state).LoadingStatus;

export const usersIsLoading = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADING;

export const usersIsLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;

export const usersItems = (state: RootState) => usersState(state).items;