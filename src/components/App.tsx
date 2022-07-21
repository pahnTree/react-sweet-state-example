import IndexPage from "../pages/IndexPage"
import { RelayEnvironmentProvider } from 'react-relay';
import environment from "../relay-env";

const App = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <IndexPage />
    </RelayEnvironmentProvider>
  )
}

export default App
