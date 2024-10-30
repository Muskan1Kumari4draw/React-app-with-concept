import React from "react";

const File = () => {
  return (
    <div>
      <form className="form-control">
        <input type="file" className="form-input" name="file" id="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default File;
