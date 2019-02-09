import ApolloClient from 'apollo-boost';
import merge from 'lodash.merge';

import { getToken } from '../helpers/authHelpers';
import { AuthGql } from 'auth';

const client = new ApolloClient({
  uri        : process.env.REACT_APP_API_GQL_ENDPOINT,
  clientState: {
    typeDefs : [AuthGql.typeDefs],
    defaults : merge({}, AuthGql.defaults),
    resolvers: merge({}, AuthGql.resolvers)
  },
  request: async operation => {
    operation.setContext({
      headers: {
        'x-auth-token': getToken()
      }
    });
  }
});

export default client;
