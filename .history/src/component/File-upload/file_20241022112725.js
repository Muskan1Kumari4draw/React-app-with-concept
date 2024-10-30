import React from "react";

const File = () => {
  return (
    <>
      <form className="form-control">
        <input type="file" className="form-input" name="file" id="file" />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default File;
