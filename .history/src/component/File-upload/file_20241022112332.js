import React from "react";

const file = () => {
  return (
    <div>
      <form class="form-control">
        <input type="file" name="file" id="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default file;
