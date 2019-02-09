import React from 'react';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';

import { VERIFY_TOKEN } from 'secured/Secured.gql';

function VerifyToken(Component) {

  function _VerifyToken(props) {
    return (
      <Query query={VERIFY_TOKEN}>
        {({ loading, error, data }) => {
          if (loading) return <h1>Loading...</h1>; // TODO: Create a loader component
          if (error) return <Redirect to="/auth/login" />;
          return <Component {...props} />;
        }}
      </Query>
    );
  }

  return _VerifyToken;
}

export default VerifyToken;
