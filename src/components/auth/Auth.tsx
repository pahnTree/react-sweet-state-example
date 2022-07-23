import { useUserState } from "../../states/UserState";
import Login from "./Login"
import Logout from "./Logout"
import User from "./User"

const Auth = () => {
  const { isAuthenticated, isError, error } = useUserState();

  if (isAuthenticated) {
    return (
      <div>
        <User />
        <Logout />
      </div>
    )
  }

  return (
    <div>
      {isError ? <div>{error}. Try again</div> : ''}
      <Login />
    </div>
  )
}

export default Auth
