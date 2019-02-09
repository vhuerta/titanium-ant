import React from 'react';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';

import { VERIFY_TOKEN } from 'secured/Secured.gql';

function VerifyToken(Component) {
  function _VerifyToken(props) {
    return (
      <Query query={VERIFY_TOKEN}>
        {({ loading, error }) => {
          switch (true) {
          case Boolean(loading):
            // TODO: Create a loader component
            return <h1>Loading...</h1>;
          case Boolean(error):
            return <Redirect to="/auth/login" />;
          default:
            return <Component {...props} />;
          }
        }}
      </Query>
    );
  }

  return _VerifyToken;
}

export default VerifyToken;
