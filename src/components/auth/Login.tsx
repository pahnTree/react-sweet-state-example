import { useUser } from "../../states/user";

const Login = () => {
  const [{ isLoading }, actions] = useUser();

  return (
    <button onClick={() => actions.loadUser()} disabled={isLoading}>
      {isLoading ? 'Logging in': 'Login'}
    </button>
  )
}

export default Login;
