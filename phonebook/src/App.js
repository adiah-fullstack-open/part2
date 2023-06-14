import React, { useState } from "react";
import AddForm from "./components/AddForm";
import Phonebook from "./components/Phonebook";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "472-3716", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-63-234356", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  // const checkDuplicates = (name) => {
  //   const duplicates = persons.filter((person) => person.name === name);

  //   return duplicates.length > 0;
  // };

  const checkDuplicates = (name) =>
    persons.filter((person) => person.name === name).length > 0;

  const addPerson = (event) => {
    event.preventDefault();

    if (checkDuplicates(newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    setPersons([
      ...persons,
      { name: newName, id: persons.length + 1, number: newNumber },
    ]);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter: <input onChange={handleFilterChange} value={filter} />
      </div>

      <br />

      <AddForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <Phonebook persons={persons} filter={filter} />
    </div>
  );
};

export default App;
