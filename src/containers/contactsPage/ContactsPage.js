import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicate){
      addContact(name, phone, email);
      setName('');
      setEmail('');
      setPhone('');
    }
    
  };

  useEffect(() => {
    const nameDuplicate = () =>{
      const nameTaken = contacts.find(contact =>  contact.name === name);
      if (nameTaken !== undefined){
        return true;
      } else {
        return false;
      }
    };
  
    if (nameDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [contacts,name,duplicate])
  

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name} 
        setName={setName}
        phone={phone} 
        setPhone={setPhone}
        email={email} 
        setEmail={setEmail}
        handleSubmit={handleSubmit}  />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
        tiles={contacts}/>
      </section>
    </div>
  );
};
