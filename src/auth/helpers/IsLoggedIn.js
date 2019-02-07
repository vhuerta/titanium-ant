import React from 'react';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';

import { GET_CURRENT_USER } from '../Auth.gql';

function IsLoggedIn(Component) {
  return props => {
    return (
      <Query query={GET_CURRENT_USER}>
        {({ data: { currentUser } }) => {
          return currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth/login" />
          );
        }}
      </Query>
    );
  };
}

export default IsLoggedIn;
