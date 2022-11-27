import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useSection } from '../helpers/context';

(function () { emailjs.init('4fIqsUhl3sTPHOf45'); }());

export default function Contact() {
  // eslint-disable-next-line no-unused-vars
  const [_, contactSection] = useSection();
  const form = useRef();

  function showMessage(status) {
    const obj = {
      success: [toast.success, 'Your message is sent'],
      error: [toast.error, 'Something went wrong'],
    };

    obj[status][0](obj[status][1], {
      position: toast.POSITION.TOP_RIGHT + window.scrollY,
      limit: 1,
      closeButton: false,
      hideProgressBar: true,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: false,
      draggable: false,
      pauseOnHover: true,
      theme: 'colored',
    });
    return toast;
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qwa8hxd', 'template_t1fzo0u', form.current, '4fIqsUhl3sTPHOf45')
      .then((result) => {
        console.log(result.text);
        showMessage('success');
        toast.dismiss();
      }, (error) => {
        console.log(error.text);
        showMessage('error');
        toast.dismiss();
      });
    form.current[0].value = '';
  };

  return (
    <section className="contact" ref={contactSection}>
      <ToastContainer />
      <div className="container">
        <div className="content">
          <div className="content-flex">
            <div className="contact-form">
              <p>CONTACT</p>
              <h2>Let`s talk</h2>
              <p className="obs">
                * Make sure you include your contact information.
              </p>

              {/* <form action="#" method="#" onSubmit={handleSubmit}> */}
              {/*  <input */}
              {/*    type="text" */}
              {/*    placeholder="Name" */}
              {/*    className="form__input" */}
              {/*    id="name" */}
              {/*  /> */}
              {/*  <input */}
              {/*    type="email" */}
              {/*    placeholder="Email" */}
              {/*    className="form__input" */}
              {/*    id="email" */}
              {/*  /> */}
              {/*  <label htmlFor="note"> */}
              {/*    <textarea */}
              {/*      id="note" */}
              {/*    > */}
              {/*      Message */}
              {/*    </textarea> */}
              {/*  </label> */}
              {/*  <button type="submit" className="form__submit">Send</button> */}
              {/* </form> */}

              <form ref={form} onSubmit={sendEmail}>
                {/* <label htmlFor="user__name"> */}
                {/*  <input type="text" name="user_name" id="user__name" placeholder="Name" /> */}
                {/* </label> */}
                {/* <label htmlFor="user__email"> */}
                {/* <input type="email" name="user_email"
                id="user__email" placeholder="Email" /> */}
                {/* </label> */}
                <label htmlFor="user__note">
                  <textarea name="message" id="user__note" placeholder="Message" />
                </label>
                <input type="submit" value="Send" className="form__submit" />
              </form>
            </div>
            <div className="image">
              <div className="container__image">
                {/* remember: next div for background, orange => */}
                <div />
                <iframe
                  title="Oslo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63988.53119608499!2d10.66391821321602!3d59.92149525310828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2sOslo!5e0!3m2!1sno!2sno!4v1664917957634!5m2!1sno!2sno"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
