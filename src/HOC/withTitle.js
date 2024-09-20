import { useEffect } from "react";

const withTitle = (WrappedComponent) => {
  function NewComponent(props) {
    useEffect(() => {
      document.title = props.title;
    }, [props.title]);

    return <WrappedComponent {...props} />;
  }

  return NewComponent;
};

export default withTitle;
