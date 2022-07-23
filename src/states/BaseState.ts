import { Action } from "react-sweet-state";

export type BaseState = {
  isLoading: boolean;
  isError?: boolean;
  error?: string;
};

export default {
  setIsLoading:
    <T>(isLoading: boolean): Action<BaseState | T> =>
    ({ setState }) =>
      setState({ isLoading }),
  setIsError:
    <T>(isError: boolean): Action<BaseState | T> =>
    ({ setState }) =>
      setState({ isError }),
  setError:
    <T>(error: string): Action<BaseState | T> =>
    ({ setState }) => {
      if (error) {
        setState({ error, isError: true });
      } else {
        setState({ isError: false });
      }
    },
  resetState:
    <T>(): Action<BaseState | T> =>
    ({ setState }) =>
      setState({
        isLoading: false,
        isError: false,
        error: "",
      }),
};
