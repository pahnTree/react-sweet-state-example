
export type User = {
  username: string | null,
  email: string | null
}

export type State = {
  user?: User,
  isAuthenticated: boolean,
  isLoading: boolean,
}
