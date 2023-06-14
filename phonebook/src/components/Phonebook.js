import React from "react";
import Entry from "./Entry";

const Phonebook = ({ persons }) => {
  return (
    <section>
      <h2>Numbers</h2>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>number</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <Entry person={person} key={person.id} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Phonebook;
