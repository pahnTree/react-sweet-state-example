import { Action, ActionThunk } from "react-sweet-state";
import { setIsLoading, setIsError, setError } from "./actions";

import { BaseState } from "../types";

// testing wrapping Promise
export const wrapper = async <T>(
  fetcher: () => Promise<T>,
  dispatch: <T extends Action<BaseState | T, any, any>>(actionThunk: T) => ReturnType<T>,
  action: (t: any) => Action<BaseState | T>
) => {
  dispatch(setIsLoading(true))
  try {
    const resp = await fetcher()
    // What's this type?
    // dispatch(action(resp))
  } catch(e) {
    dispatch(setIsError(true))
    dispatch(setError(e as string))
  }
  dispatch(setIsLoading(false))
}
