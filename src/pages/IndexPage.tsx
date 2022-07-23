import Auth from "../components/Auth"
import GraphqlUser from "../components/GraphqlUser"

const IndexPage = () => {
  return (
    <div>
      <div>Index Page</div>
      <div>
        <h1>Auth test</h1>
        <Auth />
      </div>
      <div>
        <h1>Graphql test</h1>
        <GraphqlUser />
      </div>
    </div>
  )
}

export default IndexPage
