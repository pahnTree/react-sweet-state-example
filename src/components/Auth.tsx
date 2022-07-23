import { useUser, useUserState } from "../states/UserState";

const Login = () => {
  const [{ isLoading }, actions] = useUser();

  return (
    <button onClick={() => actions.loadUser()} disabled={isLoading}>
      {isLoading ? "Logging in" : "Login"}
    </button>
  );
};

const Logout = () => {
  const [{ isLoading }, actions] = useUser()
  return (
    <button onClick={() => actions.logoutUser()} disabled={isLoading}>
      {isLoading ? 'Logging out': 'Logout'}
    </button>
  )
}

const User = () => {
  const { user, isAuthenticated, isLoading } = useUserState();

  if (!isAuthenticated) {
    if (isLoading) {
      return <div>Loading user</div>
    }
    return <div>User not authenticated</div>
  }
  return (
    <div>
      Username: {user?.username}
    </div>
  )
}

const Auth = () => {
  const { isAuthenticated, isError, error } = useUserState();

  if (isAuthenticated) {
    return (
      <div>
        <User />
        <Logout />
      </div>
    );
  }

  return (
    <div>
      {isError ? <div>{error}. Try again</div> : ""}
      <Login />
    </div>
  );
};

export default Auth;
