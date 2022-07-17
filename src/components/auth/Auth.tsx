import { useUserState } from "../../states/user";
import Login from "./Login"
import Logout from "./Logout"
import User from "./User"

const Auth = () => {
  const { isAuthenticated } = useUserState();

  if (isAuthenticated) {
    return (
      <div>
        <User />
        <Logout />
      </div>
    )
  }

  return (
    <Login />
  )
}

export default Auth
