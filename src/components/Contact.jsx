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
        <h1 className={style.title}>Contact</h1>
        <h5 className={style.mail1}> My Email: sannlfernandez8@gmail.com </h5>
        <form onSubmit={handleSubmit} className={style.form}>

        <label htmlFor="email" className={style.labelmail}>
          Your Email Address:
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
        <button type="submit" disabled={state.submitting} className={style.btn}>
          Send
        </button>
      </form>
      </div>
    );
  }

export default Contact;
