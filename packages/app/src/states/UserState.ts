import {
  createStore,
  createHook,
  createSubscriber,
  createContainer,
  createActionsHook,
  createStateHook,
} from "react-sweet-state";

import { Action } from "react-sweet-state";

import { BaseState } from "./BaseState";
import actions from "./BaseState";

import { getLogout, getUser } from "../clients/user";

export type User = {
  username: string | null;
  email: string | null;
};

export interface UserState extends BaseState {
  user?: User;
  isAuthenticated: boolean;
}

export const setIsAuthenticated =
  (isAuthenticated: boolean): Action<UserState> =>
  ({ setState }) =>
    setState({ isAuthenticated });

export const setUser =
  (user?: User): Action<UserState> =>
  ({ setState }) => {
    if (user?.username) {
      setState({ user, isAuthenticated: true });
    } else {
      setState({ user, isAuthenticated: false });
    }
  };

export const loadUser =
  (): Action<UserState> =>
  async ({ getState, dispatch }) => {
    if (getState().isLoading) return;
    dispatch(actions.resetState());
    dispatch(actions.setIsLoading(true));

    // wrapper(getUser, dispatch, setUser)

    try {
      const user = await getUser();
      dispatch(setUser(user));
    } catch (e) {
      dispatch(actions.setError(e as string));
    }
    dispatch(actions.setIsLoading(false));
  };

export const logoutUser =
  (): Action<UserState> =>
  async ({ getState, dispatch }) => {
    if (getState().isLoading) return;
    dispatch(actions.resetState());
    dispatch(actions.setIsLoading(true));

    try {
      await getLogout();
      dispatch(setUser(undefined));
    } catch (e) {
      dispatch(actions.setError(e as string));
    }
    dispatch(actions.setIsLoading(false));
  };

const initialState: UserState = {
  user: {
    username: "",
    email: "",
  },
  isAuthenticated: false,
  isLoading: false,
};

const Store = createStore({
  initialState,
  actions: {
    ...actions,
    setIsAuthenticated,
    setUser,
    loadUser,
    logoutUser,
  },
  name: "user",
});

export const UserContainer = createContainer(Store, {
  onInit: loadUser,
});

export const UserSubscriber = createSubscriber(Store);

export const useUser = createHook(Store);
export const useUserState = createStateHook(Store);
export const useUserActions = createActionsHook(Store);
