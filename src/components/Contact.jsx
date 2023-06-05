import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const formInitialData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };
  const [userData, setUserData] = useState(formInitialData);
  const handleChange = (e) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: [e.target.value] };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      userData.firstName &&
      userData.lastName &&
      userData.email &&
      userData.phoneNumber
    ) {
      const url =
        "https://contact-form-try-cfebc-default-rtdb.firebaseio.com/try-contact-form.json";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };
      const res = await fetch(url, options);
      if (res) {
        alert("Data Sent");
        setUserData(formInitialData);
      } else {
        alert("Something went wrong");
      }
    } else {
      alert("Fill out all the fields!");
    }
  };
  return (
    <form
      
      className="contact"
      onSubmit={handleSubmit}
    >
      <div className="contact-heading">Contact Form</div>
      <div className="contact__body">
        <div className="contact__body-item">
          <input
            type="text"
            className="contact__body-item-subItem"
            name="firstName"
            placeholder="First Name"
            required
            value={userData.firstName}
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="text"
            className="contact__body-item-subItem"
            name="lastName"
            placeholder="Last Name"
            required
            value={userData.lastName}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="contact__body-item">
          <input
            type="email"
            className="contact__body-item-subItem"
            name="email"
            placeholder="Email"
            required
            value={userData.email}
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="tel"
            className="contact__body-item-subItem"
            name="phoneNumber"
            placeholder="Phone Number"
            required
            value={userData.phoneNumber}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="contact__body-item">
          <textarea
            name="message"
            className="contact__body-item-subItem"
            cols="30"
            rows="10"
            value={userData.message}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Your Message"
          ></textarea>
        </div>
      </div>
      <div className="contact__submit">
        <button className="contact__submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
