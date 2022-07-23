import IndexPage from "../pages/IndexPage"

import { RelayEnvironmentProvider } from "react-relay"
import environment from "../RelayEnvironment"

const App = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <IndexPage />
    </RelayEnvironmentProvider>
  )
}

export default App
