import React from "react";

const FileUpload = () => {
  return (
    <>
      <form className="form-control">
        <input type="file" id="file" name="file" accept=".csv" />
        <label htmlFor="file">Upload a CSV file</label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FileUpload;
