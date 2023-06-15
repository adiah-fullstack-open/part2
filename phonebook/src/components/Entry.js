import React from "react";

const Entry = ({ person, deletePerson }) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td>
        <button onClick={deletePerson}>Delete</button>
      </td>
    </tr>
  );
};

export default Entry;
