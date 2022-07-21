import { useUser } from "../../states/user";

const Logout = () => {
  const [{ isLoading }, actions] = useUser()
  return (
    <button onClick={() => actions.logoutUser()} disabled={isLoading}>
      {isLoading ? 'Logging out': 'Logout'}
    </button>
  )
}

export default Logout;
