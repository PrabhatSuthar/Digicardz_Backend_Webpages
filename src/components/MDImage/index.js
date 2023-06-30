import { Tooltip } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import React, { useRef, useState } from "react";

const index = ({ fnData, color }) => {
  const inputRef = useRef(null);

  const [data, setData] = useState("");

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setData(file.name);
      fnData(fileReader.result);
      console.log("fileReader.result => ", fileReader);
    };
  };
  return (
    <>
      <input style={{ display: "none" }} ref={inputRef} type="file" onChange={handleFileChange} />

      <Tooltip describeChild title={data === "" ? "select file" : data}>
        <MDButton
          variant={data === "" ? "outlined" : "gradient"}
          onClick={() => inputRef.current.click()}
          color={color}
        >
          {data === "" ? "select file" : "Selected"}
        </MDButton>
      </Tooltip>
    </>
  );
};

export default index;
