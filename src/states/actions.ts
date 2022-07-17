import { Action } from "react-sweet-state";
import { BaseState } from "../types";

export const setIsLoading =
  <T>(isLoading: boolean): Action<BaseState | T> =>
  ({ setState }) => setState({ isLoading });

export const setIsError =
  <T>(isError: boolean): Action<BaseState | T> =>
({ setState }) => setState({ isError });

export const setError =
  <T>(error: string): Action<BaseState | T> =>
  ({ setState }) => {
    if (error) {
      setState({ error, isError: true });
    } else {
      setState({ isError: false})
    }
  }

export const resetState =
  <T>(): Action<BaseState | T> =>
  ({ setState }) => setState({
    isLoading: false,
    isError: false,
    error: ''
  })

