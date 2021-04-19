import { Action } from "redux";
import { User } from "./types/state";

export enum UsersActionsType {
  FETCH_ITEMS = "users/FETCH_ITEMS",
  SET_ITEMS = "users/SET_ITEMS",
}

export interface FetchUsersItemsActionInterface
  extends Action<UsersActionsType> {
  type: UsersActionsType.FETCH_ITEMS;
}

export interface SetUsersItemsActionInterface extends Action<UsersActionsType> {
  type: UsersActionsType.SET_ITEMS;
  payload: User[];
}

export const setUsers = (payload: User[]): SetUsersItemsActionInterface => ({
  type: UsersActionsType.SET_ITEMS,
  payload,
});
export const fetchUsers = (): FetchUsersItemsActionInterface => ({
  type: UsersActionsType.FETCH_ITEMS,
});

export type UsersActions =
  | SetUsersItemsActionInterface
  | FetchUsersItemsActionInterface;
