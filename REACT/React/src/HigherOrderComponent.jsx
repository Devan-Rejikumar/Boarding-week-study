import React from "react";

const withAuth = (WrappedComponent) => {
  return function AuthComponent(props) {
    const isAuthenticated = false;

    if (!isAuthenticated) {
      return <h2>Please login</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;


// function Profile() {
//   return <h1>My Profile</h1>;
// }

// export default withAuth(Profile);
