import { Action } from "react-sweet-state";
import { State, User } from "./types";

const USER: User = {
  username: 'ipsum',
  email: 'lorem@email.com'
}

export const setIsLoading =
  (isLoading: boolean): Action<State> =>
  ({ setState }) => setState({ isLoading });

export const setIsAuthenticated =
  (isAuthenticated: boolean): Action<State> =>
  ({ setState }) => setState({ isAuthenticated })

export const setUser =
  (user?: User): Action<State> =>
  ({ setState }) => setState({ user });


export const loadUser =
  (): Action<State> =>
  async({ getState, dispatch }) => {
    if (getState().isLoading) return;
    dispatch(setIsLoading(true));

    await new Promise((r) => setTimeout(r, 2000));
    dispatch(setUser(USER));
    dispatch(setIsLoading(false));
    dispatch(setIsAuthenticated(true))
  }

  export const logoutUser =
    (): Action<State> =>
    async({ getState, dispatch }) => {
      if (getState().isLoading) return;
      dispatch(setIsLoading(true));

      await new Promise((r) => setTimeout(r, 1000));
      dispatch(setUser(undefined));
      dispatch(setIsAuthenticated(false))
      dispatch(setIsLoading(false))
    }