import React from "react";
import "./style.css";

const FileUpload = () => {
  return (
    <>
      <div className="container">
        <form className="form-control">
          <label className="form-label">Name:</label>
          <input
            className="form-control input"
            type="text"
            id="name"
            name="name"
          />
          <label className="form-label">Address:</label>
          <input
            className="form-control input"
            type="text"
            id="address"
            name="address"
          />
          <label className="form-label">Designation</label>
          <input
            className="form-control input"
            type="text"
            id="designation"
            name="designation"
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
