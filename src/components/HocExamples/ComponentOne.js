import React, { useEffect } from "react";
import withTitle from "../../HOC/withTitle";

const ComponentOne = ({ title }) => {
  return <div>{title}</div>;
};

export default withTitle(ComponentOne);
