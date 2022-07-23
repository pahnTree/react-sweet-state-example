import {
  Environment,
  Network,
  RecordSource,
  Store,
  Variables,
  RequestParameters
} from 'relay-runtime';

const fetchFunction = async (operation: RequestParameters, variables: Variables) => {
  try {
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        // Add authentication and other headers here
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query: operation.text, // GraphQL text from input
        variables,
      }),
    });

    const data = await response.json();

    if (data.error) {
      // Graphql error
      throw data.error
    }
    
    return data;
  } catch (e) {
    throw e;
  }
}

// Create a network layer from the fetch function
const network = Network.create(fetchFunction);
const store = new Store(new RecordSource())

const environment = new Environment({
  network,
  store
  // ... other options
});

export default environment;