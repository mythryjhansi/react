const withTheme = (Component, theme = "light") => {
  return (props) => {
    return (
      <div className={props.theme === "light" ? "light-theme" : "dark-theme"}>
        <Component {...props} />
      </div>
    );
  };
};

export default withTheme;
