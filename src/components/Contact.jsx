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
        <h1 className={style.title}>Contact Me</h1>
        <h1>Here my My Email</h1>
        <h1>LinkedIn && Github flechita</h1>
        <form onSubmit={handleSubmit} className={style.form}>

        <label htmlFor="email" className={style.labelmail}>
          Email Address:
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className={style.mail}
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
                <label htmlFor="email" className={style.msj}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className={style.boxmsj}
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
