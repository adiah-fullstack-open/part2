import React, { useState } from "react";
import Entry from "./components/Entry";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "472-3716", id: 1 },
  ]);

  const [newName, setNewName] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    setPersons([...persons, { name: newName, id: persons.length + 1 }]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

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
    </div>
  );
};

export default App;
