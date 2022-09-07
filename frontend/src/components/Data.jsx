import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Data = () => {
  const [data, getData] = useState("");

  const allData = async () => {
    const { data } = await axios.get("/api/data/");
    getData(data);
  };

  const deleteData = async (id) => {
    try {
      const { data } = await axios.delete(`/api/data/${id}`);
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    allData();
  });

  if (data.length > 0) {
    return data.map((alldata) => {
      return (
        <tbody key={alldata._id}>
          <tr>
            <th>CHECKBOX</th>
            <th>{alldata._id}</th>
            <th>{alldata.name}</th>
            <th>{alldata.phonenumber}</th>
            <th>{alldata.email}</th>
            <th>{alldata.hobbies}</th>
            <th>
              <Button
                variant="success"
                href={`/update/${alldata._id}`}
                className="me-3"
              >
                UPDATE
              </Button>
              <Button variant="danger" onClick={(e) => deleteData(alldata._id)}>
                DELETE
              </Button>
            </th>
          </tr>
        </tbody>
      );
    });
  }
};

export default Data;
