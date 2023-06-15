import React, { useEffect, useState } from "react";
import AddForm from "./components/AddForm";
import Filter from "./components/Filter";
import Phonebook from "./components/Phonebook";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

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

  const checkDuplicates = (name) =>
    persons.filter((person) => person.name === name).length > 0;

  const addPerson = (event) => {
    event.preventDefault();

    if (checkDuplicates(newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    const person = { name: newName, number: newNumber };

    personService.create(person).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const deletePerson = (id) => {
    const person = persons.find((n) => n.id === id);

    if (window.confirm(`Delete ${person.name}`)) {
      personService
        .deletePerson(id)
        .then((data) => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => alert(`error`));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleFilterChange={handleFilterChange} filter={filter} />

      <br />

      <AddForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <Phonebook
        persons={persons}
        filter={filter}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
