import React, { useState } from "react";
import axios from "axios";

import Form from "./components/formElements/Form";

import { Container, Title } from "./theme/App.styled";

import { Dish } from "./types";

const App = () => {
  const [apiError, setApiError] = useState("");
  const [showError, setShowError] = useState(false);

  const formatError = (error: string) => {
    const errorArray = error.split(":");
    const errorString = errorArray[0].trim().slice(2, -1);
    return `${errorString} is required`;
  };

  const submitFormHandler = async (data: Dish) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL as string,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(JSON.stringify(response.data));
      setApiError("");
      setShowError(false);
      return true;
    } catch (error: any) {
      console.log(error);
      setApiError(formatError(error.response.request.responseText));
      setShowError(true);
      return false;
    }
  };

  return (
    <Container>
      <Title>Dish Selector</Title>
      <Form
        formHandler={submitFormHandler}
        apiError={apiError}
        showError={showError}
      />
    </Container>
  );
};

export default App;
