import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import Data from "./Data";

const TableInput = () => {
  const getInfo = () => {
    var grid = document.getElementById("table1");
    var checkboxes = grid.getElementsByTagName("input");
    var message = "";

    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        var row = checkboxes[i].parentNode.parentNode;
        message += "ID: " + row.cells[1].innerHTML + "\n";
        message += "NAME: " + row.cells[2].innerHTML + "\n";
        message += "PHONE NUMBER: " + row.cells[3].innerHTML + "\n";
        message += "EMAIL: " + row.cells[4].innerHTML + "\n";
        message += "HOBBIES: " + row.cells[5].innerHTML + "\n";
        message += "\n";
      }
    }
    console.log(message);

    var link =
      "mailto:info@redpositive.in" +
      "?cc=jeffreymukkath65@outlook.com" +
      "&subject=" +
      encodeURIComponent("DATA") +
      "&body=" +
      encodeURIComponent(message);

    window.location.href = link;
  };

  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");

  const navigate = useNavigate();

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
      navigate(0);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <Container>
      <Row>
        <Table striped bordered hover variant="light" id="table1">
          <thead>
            <tr>
              <th>SELECT ROW</th>
              <th>ID</th>
              <th>NAME</th>
              <th>PHONE NUMBER</th>
              <th>EMAIL</th>
              <th>HOBBIES</th>
              <th>OPTIONS</th>
            </tr>
          </thead>
          <Data />
        </Table>
        <div className="d-flex flex column ps-0">
          <Button variant="success" onClick={getInfo} className="me-3">
            SEND INFO
          </Button>
          <Popup
            trigger={<Button variant="primary">ADD NEW DATA</Button>}
            modal
            nested
          >
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
                  type="number"
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
                onInvalid={(e) =>
                  e.target.setCustomValidity("please fill this field")
                }
                onInput={(e) => e.target.setCustomValidity("")}
              />
              <Button variant="primary" type="submit" className="mb-3">
                ENTER DATA
              </Button>
            </Form>
          </Popup>
        </div>
      </Row>
    </Container>
  );
};

export default TableInput;
