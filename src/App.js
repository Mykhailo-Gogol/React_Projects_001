import "./App.css";
import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";

const App = () => {
  // додає хуки
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3") //! fetching data
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContacts(data.results);
      });
  }, []);

  return (
    // pagination
    <>
      <button //! pagination button
        onClick={() => {
          fetch("https://randomuser.me/api/?results=3")
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const moreContacts = [...contacts, ...data.results];

              setContacts(moreContacts);
            });
        }}
      >
        More contacts
      </button>

      {
        //! contact list
        contacts.map((contact) => (
          <ContactCard
            avatar={contact.picture.large}
            name={contact.name.first + " " + contact.name.last}
            email={contact.email}
            age={contact.dob.age}
          />
        ))
      }
    </>
  );
};

export default App;
