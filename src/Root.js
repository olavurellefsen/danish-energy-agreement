import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import 'typeface-roboto'
import { injectGlobal } from 'styled-components'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://2hjn2ky3hb.execute-api.eu-west-1.amazonaws.com/Prod/aws-lambda-graphql' }),
  cache: new InMemoryCache()
});

export default class Root extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

injectGlobal`
  body {
    font-family: Roboto;
    font-size: 1em;
    margin: 0px;
    width: 100%;
    height: 100%;
  }
`