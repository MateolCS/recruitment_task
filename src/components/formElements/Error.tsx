import React from "react";

import { StyledError } from "./Error.styled";

interface ErrorProps {
  error: string;
}

const Error = ({ error }: ErrorProps) => {
  return <StyledError>{error}</StyledError>;
};

export default Error;
