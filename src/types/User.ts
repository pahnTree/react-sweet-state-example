import { BaseState } from "."

export type User = {
  username: string | null,
  email: string | null
}

export interface UserState extends BaseState{
  user?: User,
  isAuthenticated: boolean
}
