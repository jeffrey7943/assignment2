import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import Data from "./Data";

const TableInput = () => {
  return (
    <Container>
      <Row>
        <Table striped bordered hover variant="light">
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
      </Row>
    </Container>
  );
};

export default TableInput;
