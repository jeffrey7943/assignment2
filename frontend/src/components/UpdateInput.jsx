import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const UpdateInput = () => {
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");

  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/data/${id}`);
      setName(data.name);
      setPhoneNumber(data.phonenumber);
      setEmail(data.email);
      setHobbies(data.hobbies);
    };

    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateData = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(`/api/data/${id}`, {
        name,
        phonenumber,
        email,
        hobbies,
      });

      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error.data.response.message);
    }
  };

  return (
    <Form onSubmit={updateData}>
      <h1>FORM!</h1>
      <FloatingLabel controlId="name" label="NAME" className="mb-3">
        <Form.Control
          type="text"
          placeholder="JOHN"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="phonenumber"
        label="PHONE NUMBER"
        className="mb-3"
      >
        <Form.Control
          type="number"
          placeholder="7506409929"
          value={phonenumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="email" label="EMAIL" className="mb-3">
        <Form.Control
          type="email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FloatingLabel>
      <Form.Label className="mb-3 ms-2">HOBBIES</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        className="mb-3"
        value={hobbies}
        onChange={(e) => setHobbies(e.target.value)}
      />
      <Button variant="primary" type="submit" className="mb-3">
        UPDATE DATA
      </Button>
    </Form>
  );
};

export default UpdateInput;
