import React from "react";
import Entry from "./Entry";

const Phonebook = ({ persons, filter, deletePerson }) => {
  const personsToShow =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

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
          {personsToShow.map((person) => (
            <Entry
              person={person}
              key={person.id}
              deletePerson={() => deletePerson(person.id)}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Phonebook;
