import { put, takeLatest, call } from "redux-saga/effects";
import { fetchContent } from "../../services/api/usersApi";
import { LoadingStatus } from "../types";
import { UsersActionsType, setUsers } from "./actionCreators";
import { User } from "./types/state";

export function* fetchUsersRequest() {
  try {
    const items: User[] = yield call(fetchContent.getUsersInfo);
    yield put(setUsers(items));
  } catch (error) {
    //yield put(setTagsLoadingStatus(LoadingStatus.ERROR));
    console.log(LoadingStatus.ERROR, error);
  }
}

export function* usersSaga() {
  yield takeLatest(UsersActionsType.FETCH_ITEMS, fetchUsersRequest);
}
