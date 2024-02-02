import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
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
          placeholder="Contact Name"
          aria-label="Contact Name"/>
      </label>
      <label>Enter your email:
        <input 
        type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Contact Email"
          aria-label="Contact Email" />
      </label>
      <label>Enter your phone:
        <input 
        type="tel"
          name="name"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
          placeholder="Contact Phone Number"
          aria-label="Contact Phone Number" />
      </label>
      <input type="submit" value="Add Contact"  />
    </form>
    
    
    </>
  );
};

