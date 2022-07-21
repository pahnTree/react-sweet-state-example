import { Suspense } from 'react'
import { Auth } from "../components/auth"
import GraphqlUser from '../components/GraphqlUser'

const IndexPage = () => {
  return (
    <div>
      <div>Index Page</div>
      <div>
        <h1>Auth test</h1>
        <Auth />
      </div>
      <div>
        <h1>React Relay test</h1>
        <Suspense fallback="Loading..." >
          <GraphqlUser />
        </Suspense>
      </div>
    </div>
  )
}

export default IndexPage
