import React from "react";

const Filter = ({ handleFilterChange, filter }) => {
  return (
    <div>
      filter: <input onChange={handleFilterChange} value={filter} />
    </div>
  );
};

export default Filter;
