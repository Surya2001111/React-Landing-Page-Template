import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


export const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yhpiqt6", // Replace with your actual Service ID
        "template_1d8m4w9", // Replace with your actual Template ID
        form.current,
        "bSK32trT9GvQvC76J" // Replace with your actual Public Key
      )
      .then(
        () => {
          alert("Form has been submitted successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form ref={form} id="contact-form" onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="user_phone"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="user_message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  value="Send"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2024 Avinayana Dance Academy</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
