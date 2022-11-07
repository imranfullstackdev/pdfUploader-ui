import React, { useState, useEffect } from "react";
// import "./App.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as xlsx from "xlsx";
// import Data from "./component/Data";

function Adhar() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post("http://localhost:8000/upload", formData);
      // before sending this send the user id
      const data=await res.err;
      console.log(data)
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <div className="App">
        <input type="file" name="file" onChange={saveFile} />
        <button onClick={uploadFile}>Upload</button>
      </div>
      <div></div>
    </>
  );
}

export default Adhar;
