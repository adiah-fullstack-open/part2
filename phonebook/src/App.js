import React, { useState } from "react";
import AddForm from "./components/AddForm";
import Phonebook from "./components/Phonebook";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "472-3716", id: 1 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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

      <AddForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <Phonebook persons={persons} />
    </div>
  );
};

export default App;
