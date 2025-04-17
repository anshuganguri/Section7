import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Lab6.css";

const Lab6 = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/unknown") // Correct API URL
      .then((res) => {
        setResult(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2 style={{color:"white"}}>User List</h2>
      <table border={1} style={{ width: "100%", borderCollapse: "collapse",height: "100%" }}>
        <thead>
          <tr style={{ textAlign: "center", fontWeight: "bold", backgroundColor: "orange" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Year</th>
            <th>Color</th>
            <th>Pantone Value</th>
          </tr>
        </thead>
        <tbody>
          {result.map((element) => (
            <tr key={element.id} style={{ textAlign: "center", fontWeight: "bold", backgroundColor: element.color }}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.year}</td>
              <td>{element.color}</td>
              <td>{element.pantone_value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lab6;