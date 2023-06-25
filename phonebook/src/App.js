import React, { useEffect, useState } from "react";
import AddForm from "./components/AddForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
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
  const [message, setMessage] = useState(null);

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

  const showNotification = (message, type) => {
    setMessage({
      text: message,
      type: type,
    });
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (checkDuplicates(newName)) {
      const person = persons.find((person) => person.name === newName);
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personService
          .updateNumber(person.id, { number: newNumber })
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === returnedPerson.id ? returnedPerson : person
              )
            );

            showNotification(
              `${person.name}'s number has been updated`,
              "success"
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((error) =>
            showNotification(
              `${person.name}'s information has already been removed from the server`,
              "error"
            )
          );
        setPersons(persons.filter((p) => p.id !== person.id));
        return;
      } else {
        return;
      }
    }

    const person = { name: newName, number: newNumber };

    personService
      .create(person)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        showNotification(`${person.name} has been added`, "success");
        setNewName("");
        setNewNumber("");
      })
      .catch((error) => {
        // console.log(error.response.data.error);
        showNotification(`${error.response.data.error}`, "error");
      });
  };

  const deletePerson = (id) => {
    const person = persons.find((n) => n.id === id);

    if (window.confirm(`Delete ${person.name}`)) {
      personService
        .deletePerson(id)
        .then((data) => {
          setPersons(persons.filter((person) => person.id !== id));
          showNotification(`${person.name} has been deleted`, "success");
        })
        .catch((error) => alert(`error`));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} />

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
