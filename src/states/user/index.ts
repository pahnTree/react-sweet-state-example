import { createStore, createHook, createSubscriber, createContainer, createActionsHook, createStateHook } from "react-sweet-state";

import * as actions from './actions'
import * as selectors from './selectors'

import type { UserState } from '../../types/User'

type Actions = typeof actions

const initialState: UserState = {
  user: {
    username: '',
    email: ''
  },
  isAuthenticated: false,
  isLoading: false
}

const Store = createStore<UserState, Actions>({
  initialState,
  actions,
  name: 'user'
});

export const UserContainer = createContainer(Store, {
  onInit: actions.loadUser
})

export const UserSubscriber = createSubscriber(Store);

export const useUser = createHook(Store);
export const useUserState = createStateHook(Store);
export const useUserActions = createActionsHook(Store);