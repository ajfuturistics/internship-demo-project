import React from "react";
import "./form.css";

const Form = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-container">
      <h1 className="">Thank You So Much for taking the time!</h1>
      <p className="">please provide below details</p>
      <div className="form-section">
        <form onSubmit={handleContactSubmit}>
          <div className="subject-div">
            <div className="block-name">
              <input
                className="block-field-name"
                id="firstname"
                type="text"
                name="firstname"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="subject-div">
            <div className="block-name">
              <input
                className="block-field-name"
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="msg-div">
            <textarea
              name="Body"
              id="Body"
              className="text-area"
              placeholder="Enter Full Postal Address"
            ></textarea>
          </div>

          <div className="subject-div">
            <div className="block-name">
              <input
                className="block-field-name"
                id="country"
                type="text"
                name="country"
                placeholder="Country"
              />
            </div>
          </div>

          <div className="subject-div">
            <div className="block-name">
              <input
                className="block-field-name"
                id="email"
                type="text"
                name="firstname"
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="subject-div">
            <div className="block-name">
              <input
                className="block-field-name"
                id="phone"
                type="text"
                name="phone"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="toggle1">
            <div className="form-btn1">We are listening</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
