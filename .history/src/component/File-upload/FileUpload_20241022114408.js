import React from "react";
import "./style.css";

const FileUpload = () => {
  return (
    <>
      <div className="container">
        <form className="form-control">
          <label className="label">Name:</label>
          <input
            className="form-control input"
            type="file"
            id="file"
            name="file"
          />
          <label className="label" htmlFor="file">
            Address:
          </label>
          <input
            className="form-control input"
            type="file"
            id="file"
            name="file"
          />
          <label className="label" htmlFor="file">
            Designation
          </label>
          <input
            className="form-control input"
            type="file"
            id="file"
            name="file"
          />
          <label className="label" htmlFor="file">
            Choose File
          </label>
          <input
            className="form-control input"
            type="file"
            id="file"
            name="file"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default FileUpload;