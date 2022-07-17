import { Action } from "react-sweet-state";
import * as actions from "../actions";

import { getLogout, getUser } from "../../clients/user";
import { User, UserState } from "../../types/User";

export const setIsAuthenticated =
  (isAuthenticated: boolean): Action<UserState> =>
  ({ setState }) => setState({ isAuthenticated })

export const setUser =
  (user?: User): Action<UserState> =>
  ({ setState }) => {
    if (user?.username) {
      setState({ user, isAuthenticated: true });
    } else {
      setState({ user, isAuthenticated: false})
    }
  }

export const loadUser =
  (): Action<UserState> =>
  async({ getState, dispatch }) => {
    if (getState().isLoading) return;
    dispatch(actions.resetState())
    dispatch(actions.setIsLoading(true));

    // wrapper(getUser, dispatch, setUser)

    try {
      const user = await getUser();
      dispatch(setUser(user));
    } catch(e) {
      dispatch(actions.setError(e as string))
    }
    dispatch(actions.setIsLoading(false));
  }

export const logoutUser =
  (): Action<UserState> =>
  async({ getState, dispatch }) => {
    if (getState().isLoading) return;
    dispatch(actions.resetState())
    dispatch(actions.setIsLoading(true));

    try {
      await getLogout();
      dispatch(setUser(undefined));
    } catch (e) {
      dispatch(actions.setError(e as string))
    }
    dispatch(actions.setIsLoading(false))
  }