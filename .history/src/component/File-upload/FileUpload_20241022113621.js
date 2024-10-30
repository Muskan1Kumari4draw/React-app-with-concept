import React from "react";

const FileUpload = () => {
  return (
    <>
      <div className="container">
        <form className="form-control">
          <input
            className="form-control input"
            style="display:none;"
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
