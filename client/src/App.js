
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Project from './pages/Project';
import NotFound from './pages/NotFound';

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
      <Router>
        <Header />
        <div className="container">
          <h1>ReactJS Application</h1>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Project/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
        </Router>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
