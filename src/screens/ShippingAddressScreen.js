import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function ShippingAddressScreen() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="my-3">Registro nuevo usuario</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup className="mb-3" controlId="fullName">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></Form.Control>
        </FormGroup>
        <FormGroup className="mb-3" controlId="address">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></Form.Control>
        </FormGroup>
        <FormGroup className="mb-3" controlId="city">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></Form.Control>
        </FormGroup>
        <FormGroup className="mb-3" controlId="postalCode">
          <Form.Label>Código postal</Form.Label>
          <Form.Control
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></Form.Control>
        </FormGroup>
      </Form>
    </div>
  );
}
