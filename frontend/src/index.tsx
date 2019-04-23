import React from 'react'
import ReactDOM from 'react-dom'

import client from './apollo-config'
import { ApolloProvider } from 'react-apollo'
import App from './App'

import { ApolloProvider as ApolloProviderHooks } from 'react-apollo-hooks'

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloProviderHooks client={client}>
      <App />
    </ApolloProviderHooks>
  </ApolloProvider>,
  document.getElementById('root')
)
