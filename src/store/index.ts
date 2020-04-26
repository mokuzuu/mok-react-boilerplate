import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { v4 as uuidv4 } from "uuid";
import { db } from "services/firebase";
import moment from "moment";
export const SET_UID = "SET_UID";
export const SET_USERNAME = "SET_USERNAME";
const SET_SENDING_STATUS = "SET_SENDING_STATUS";
export interface IComment {
  userName: string;
  comment: string;
  date: Date;
}
export interface IAppState {
  userName: string | null;
  uid: string | null;
  isSending: boolean;
}
const appState: IAppState = {
  userName: null,
  uid: null,
  isSending: false,
};

const setUserName = (userName: string) => {
  return {
    type: SET_USERNAME,
    userName,
  };
};
const setSendingStatus = (newStatus: boolean) => {
  return {
    type: SET_SENDING_STATUS,
    newStatus,
  };
};
export const setUid = (uid: string) => ({ type: SET_UID, uid });
export const userLogin = (userName: string) => {
  return function(dispatch: Function) {
    const uid = uuidv4();
    dispatch(setUserName(userName));
    dispatch(setUid(uid));
  };
};
export const sendComment = (input: string) => {
  setSendingStatus(true);
  return function(dispatch: Function, getState: any) {
    const newCommentRef = db.ref("comments/").push();
    return newCommentRef
      .set({
        userName: getState().userName,
        uid: getState().uid,
        date: moment().unix(),
        comment: input,
      })
      .then(() => {
        dispatch(setSendingStatus(false));
      });
  };
};

const appReducer = (state = appState, action: any) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        userName: action.userName,
      };
    case SET_UID:
      return {
        ...state,
        uid: action.uid,
      };
    case SET_SENDING_STATUS:
      return {
        ...state,
        isSending: action.newStatus,
      };
    default:
      return state;
  }
};

export default createStore(appReducer, applyMiddleware(thunk));
