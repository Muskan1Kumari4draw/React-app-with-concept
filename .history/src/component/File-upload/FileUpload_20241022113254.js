import React from "react";

const FileUpload = () => {
  return (
    <>
      <container></container>
      <form className="form-control">
        <input type="file" id="file" name="file" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FileUpload;
