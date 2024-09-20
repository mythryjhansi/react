import React, { useEffect } from "react";
import withTitle from "../../HOC/withTitle";

const ComponentTwo = ({ title }) => {
  return <div>Component Two</div>;
};

export default withTitle(ComponentTwo);
