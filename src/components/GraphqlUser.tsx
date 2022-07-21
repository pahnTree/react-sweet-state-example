import { useGetUserQuery } from "../clients/graphql/getUser"

const GraphqlUser = () => {
  const data = useGetUserQuery();
  return (
    <div>
      <div>Username: {data.user?.username}</div>
      <div>Email: {data.user?.email}</div>
    </div>
  )
}

export default GraphqlUser;
