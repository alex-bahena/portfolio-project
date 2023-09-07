import React, { useState } from "react";
import Navbar from "../Navbar";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const serviceIdentificationNumber = "service_ID";
  const templateIdentificationNumber = "template_xbuoa34";
  const userIdentificationNumber = "-Xgmg4dJLiZCoz88A";

  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, reset) => {
    const { name, email, message } = data;
    sendEmail(
      serviceIdentificationNumber,
      templateIdentificationNumber,
      {
        name,
        email,
        message,
      },
      userIdentificationNumber
    );
    reset.target.reset();
  };

  //  ------------------------CONTACT FORM LOGIC---------------------------
  const sendEmail = (
    serviceIdentificationNumber,
    templateIdentificationNumber,
    variables,
    userIdentificationNumber
  ) => {
    //  ------------------------Emailjs https://www.emailjs.com/ ---------------------------
    emailjs
      .send(
        serviceIdentificationNumber,
        templateIdentificationNumber,
        variables,
        userIdentificationNumber
      )
      .then(() => {
        setSuccessMessage(
          "Your email was sent successfully! Thanks for reaching out, I'll contact you as soon as possible."
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <>
      <Navbar />
      <div className="contact-form  container mt-5">
        <h2 className="greeting-message mb-5 text-center">
          Thanks for taking the time to contact me. <br />
          Please let me know if there is anything I can help with.
        </h2>
        <span className="success-message">{successMessage}</span>
        <form onSubmit={handleSubmit(onSubmit)} className="row ">
          <div className="mb-3 col-md-6 col-xs-12">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              {...register("name", {
                required: "Please enter your name",
                minLength: {
                  value: 4,
                  message: "Please enter a name with more than 4 characters",
                },
              })}
            />
            <span className="error-message">
              {errors.name && errors.name.message}
            </span>
          </div>

          <div className="mb-3 col-md-6 col-xs-12">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              {...register("email", {
                required: "Please enter a valid email address",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid Email",
                },
              })}
            />
            <span className="error-message">
              {errors.email && errors.email.message}
            </span>
          </div>
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <div className="message-section mb-3 col-md-12 col-xs-12">
            <textarea
              className="form-control"
              id="message"
              {...register("message", {
                required: "Please let me know how can I help you",
                minLength: {
                  value: 10,
                  message: "Please let me know more about it",
                },
              })}
            />
            <span className="error-message">
              {errors.message && errors.message.message}
            </span>
            <button
              className="btn-main-offer contact-btn"
              type="submit"
              value="Submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
