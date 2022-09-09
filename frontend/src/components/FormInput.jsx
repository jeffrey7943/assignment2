import React, { useState } from "react";
import axios from "axios";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const FormInput = () => {
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");

  const registerData = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/data/add", {
        name,
        phonenumber,
        email,
        hobbies,
      });

      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <Form onSubmit={registerData}>
      <h1>FORM!</h1>
      <FloatingLabel controlId="name" label="NAME" className="mb-3">
        <Form.Control
          type="text"
          placeholder="JOHN"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoFocus
          pattern="[A-Za-z\s]{3,30}"
          onInvalid={(e) =>
            e.target.setCustomValidity(
              "use only A-Z & a-z characters and max 30 characters"
            )
          }
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="phonenumber"
        label="PHONE NUMBER"
        className="mb-3"
      >
        <Form.Control
          type="tel"
          placeholder="7506409929"
          value={phonenumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          pattern="[0-9]{10}"
          onInvalid={(e) =>
            e.target.setCustomValidity(
              "please enter numbers only and max 10 numbers"
            )
          }
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </FloatingLabel>
      <FloatingLabel controlId="email" label="EMAIL" className="mb-3">
        <Form.Control
          type="email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          onInvalid={(e) =>
            e.target.setCustomValidity("please enter a proper email")
          }
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </FloatingLabel>
      <Form.Label className="mb-3 ms-2">HOBBIES</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        className="mb-3"
        value={hobbies}
        onChange={(e) => setHobbies(e.target.value)}
        required
        onInvalid={(e) => e.target.setCustomValidity("please fill this field")}
        onInput={(e) => e.target.setCustomValidity("")}
      />
      <Button variant="primary" type="submit" className="mb-3">
        ENTER DATA
      </Button>
    </Form>
  );
};

export default FormInput;
