import produce, { Draft } from "immer";
import { LoadingStatus } from "../types";
import { UsersActions, UsersActionsType } from "./actionCreators";

import { UsersState } from "./types/state";

const initialUsersState: UsersState = {
  items: [],
  LoadingStatus: LoadingStatus.NEVER,
};

export const usersReducer = produce(
  (draft: Draft<UsersState>, action: UsersActions) => {
    switch (action.type) {
      case UsersActionsType.FETCH_ITEMS:
        draft.LoadingStatus = LoadingStatus.LOADING;
        break;
      case UsersActionsType.SET_ITEMS:
        draft.items = action.payload;
        draft.LoadingStatus = LoadingStatus.LOADED;
        break;

      default:
        break;
    }
  },
  initialUsersState
);
