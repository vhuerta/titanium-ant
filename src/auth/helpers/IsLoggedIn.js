import React from 'react';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';

import { GET_CURRENT_USER } from '../Auth.gql';

function IsLoggedIn(Component) {
  function _IsLoggedIn(props) {
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
  }

  return _IsLoggedIn;
}

export default IsLoggedIn;
