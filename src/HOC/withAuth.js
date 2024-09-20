const withAuth = (Component) => {
  return (props) => {
    const isAuth = localStorage.getItem("isAuth");

    return (
      <>{isAuth ? <Component {...props} /> : <p>You dont have access</p>}</>
    );
  };
};

export default withAuth;
