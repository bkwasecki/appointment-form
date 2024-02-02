import React, {useMemo} from "react";
import {ContactPicker} from "../contactPicker/ContactPicker"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
        type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          
          placeholder="Appointment Name"
          aria-label="Appointment Name" />
      </label>
      
      <label>Enter your date:
        <input 
        type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          min={getTodayString()}
          
          aria-label="Appointment Date" />
      </label>
      
      <label>Enter your time:
        <input 
        type="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          
          
          aria-label="Appointment Time" />
      </label>
      
      <ContactPicker
       name="contact"
          value={contact}
          contacts={contactNames}
          onChange={(e) => setContact(e.target.value)}/>
          <input type="submit" value="Add Appointment"  />
    </form>
    </>
  );
};
