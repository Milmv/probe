import { LoadingStatus } from "../../types";

export interface User {
  _id?: string;
  email: string;
  username: string;
  name: string;
}

export interface UsersState {
  items: User[] | undefined;
  LoadingStatus: LoadingStatus;
}
