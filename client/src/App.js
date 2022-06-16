import React from 'react';
import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming){
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming){
            return incoming;
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache
})

function App() {
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <h1>ReactJS Application</h1>
        </div>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
