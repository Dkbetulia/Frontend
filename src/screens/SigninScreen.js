import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Axios } from "axios";
import { useState } from "react";

const baseURL = "http://localhost:30000";

export default function SigninScreen() {
  const { search } = useLocation;
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post(`${baseURL}/api/users/signin`, {
        email,
        password,
      });
      console.log(data);
    } catch (err) {}
  };

  return (
    <Container className="small-container">
      <h1 className="my-3">Inicio de Sesión</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Entra tu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            required
            placeholder="Entra tu contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Inicio de Sesión</Button>
        </div>
        <div className="mb-3">
          ¿No tienes cuenta?{" "}
          <Link to={`/signup?redirect=${redirect}`}>
            Crea una cuenta con nosotros
          </Link>
        </div>
      </Form>
    </Container>
  );
}
