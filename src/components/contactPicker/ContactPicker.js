import React from "react";

export const ContactPicker = ({contacts, value, name, onChange}) => {
  return (
    <>
    <select 
    onChange={onChange}
    name={name}
    value={value}
    aria-label="Contact Picker">
    <option value={""} key={-1}>"No contact selected"</option>
    {contacts.map((contact, index) => {
      return <option value={contact} key={index}>{contact}</option>
    })}
    </select>
    </>
  );
};
