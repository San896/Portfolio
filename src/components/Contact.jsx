import React from "react";
import style from './Contact.module.css'
import { useForm, ValidationError } from '@formspree/react';

function Contact() {



    const [state, handleSubmit] = useForm("xjvdbwpo");


    if (state.succeeded) {
        return <p>Thanks, i will contatc you soon</p>;
    }


    return (
      <div>
        <h1>Contact Me</h1>
        <h1>Here my My Email</h1>
        <h1>LinkedIn && Github flechita</h1>
        <form onSubmit={handleSubmit} className={style.form}>

        <label htmlFor="email">
          Email Address:
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
                <label htmlFor="email">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
      </div>
    );
  }

export default Contact;
