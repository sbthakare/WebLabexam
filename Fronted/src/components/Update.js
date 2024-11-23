import React, { useRef } from "react";
import axios from "axios";

function Update() {
  const x1 = useRef();
  const x2 = useRef();
  const x3 = useRef();
  const x4 = useRef();
  const x5 = useRef();

  const f1 = () => {
    const id = x1.current.value;
    const data = {
      id: x1.current.value,
      name: x2.current.value,
      addr: x3.current.value,
      stream: x4.current.value,
      year: x5.current.value,
    };

    axios
      .put(`http://localhost:9000/students/${id}`, data)
      .then((response) => {
        console.log(response.data);
        alert("Student updated successfully!");

        x1.current.value = "";
        x2.current.value = "";
        x3.current.value = "";
        x4.current.value = "";
        x5.current.value = "";
      })
      .catch((error) => {
        console.error("There was an error updating :", error);
        alert("Failed to update.");
      });
  };

  return (
    <div className="container">
      <h1>Update Student</h1>
      <input type="text" ref={x1} placeholder="ID" />
      <br />
      <input type="text" ref={x2} placeholder="Name" />
      <br />
      <input type="text" ref={x3} placeholder="Address" />
      <br />
      <input type="text" ref={x4} placeholder="Stream" />
      <br />
      <input type="text" ref={x5} placeholder="Year" />
      <br />
      <button onClick={f1}>Update Student</button>
    </div>
  );
}

export default Update;
