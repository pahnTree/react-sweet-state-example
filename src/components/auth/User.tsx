import { useUserState } from "../../states/user"

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

export default User;
