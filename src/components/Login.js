import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export default function Login() {
  const { register, errors, handleSubmit } = useForm({});
  const History = useHistory(); // return redirect that happens after a few seconds
  const [LoggedIn, setLoggedIn] = useState(false);

  const onSubmit = (user) => {
    axios
      .post("http://localhost:8080/users/login", user)
      .then((res) => {
        setLoggedIn(true);
        window.sessionStorage.setItem("login", user.username);
        setTimeout(() => {
          History.push("/");
          window.location.reload();
        }, 200);
      })
      .catch((err) => console.log(err));  
  };


  const logout = () => {
    localStorage.removeItem("user");
  };
  
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  return (
    <Container
      className="col-sm-2 col-form-label"
      style={{ marginTop: "250px", marginBottom: "175px" }}
    >
      <Form onSubmit={(e) => e.preventDefault}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username: </Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter your username"
            ref={register({ required: true })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password"
            ref={register({ required: true })}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="submit-register"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}
