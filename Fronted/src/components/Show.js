import React, { useEffect, useState } from "react";

function Show() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/students")
      .then((res) => res.json())
      .then((value) => {
        setData(value);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Show Students</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Stream</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr>
              <td>{record.sid}</td>
              <td>{record.name}</td>
              <td>{record.addr}</td>
              <td>{record.stream}</td>
              <td>{record.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Show;
