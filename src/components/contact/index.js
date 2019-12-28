import { ErrorMessage, FastField, Form, withFormik } from 'formik';
import React from 'react';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';

import styles from './contact-form.module.css';

const recaptcha_key = "6LdNrcoUAAAAAAhel9tZw5JIDc-7JcMEG1H_RRB4"

const ContactFormLayout = ({
  setFieldValue,
  isSubmitting,
  values,
  errors,
  touched,
}) => {
  return (
    <Form
      className={styles.contactForm}
      name="contact"
      method="post"
      data-netlify="true"
      // data-netlify-recaptcha="true"
      data-netlify-honeypot="bot-field"
    >
      <h3 className={styles.formTitle}>Feel free to contact me</h3>
      <div className={styles.inputField}>
        <FastField
          type="text"
          name="name"
          component="input"
          className={styles.input}
        />
        <span className={styles.line}></span>
        <label className={styles.label}>Name</label>
        {touched.name && errors.name && (
          <span className={styles.error}>{errors.name}</span>
        )}
      </div>
      <div className={styles.inputField}>
        <FastField
          component="input"
          type="email"
          name="email"
          className={styles.input}
        />
        <span className={styles.line}></span>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        {touched.email && errors.email && (
          <span className={styles.error}>{errors.email}</span>
        )}
      </div>
      <div className={styles.inputField}>
        <FastField
          component="textarea"
          rows="6"
          name="message"
          className={styles.textarea}
        />
        <span className={styles.line}></span>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        {touched.message && errors.message && (
          <span className={styles.error}>{errors.message}</span>
        )}
      </div>
      {/* {values.name && values.email && values.message && (
        <div className={styles.inputField}>
          <FastField
            component={Recaptcha}
            sitekey={recaptcha_key}
            name="recaptcha"
            onChange={value => setFieldValue("recaptcha", value)}
          />
          <ErrorMessage
            name="recaptcha"
            component="span"
            className={styles.error}
          />
        </div>
      )} */}
      {values.success && (
        <div className={styles.success}>
          <h4>
            Your message has been successfully sent, I will get back to you
            soon!
          </h4>
        </div>
      )}
      <div className={styles.buttons}>
        <input
          name="submit"
          type="submit"
          disabled={isSubmitting}
          value="Send Message"
          className={styles.submitButton}
        />
      </div>
    </Form>
  )
}

export const ContactForm = withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    message: "",
    // recaptcha: "",
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      name: Yup.string().required("Name field is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email field is required"),
      message: Yup.string().required("Message field is required"),
      // recaptcha: Yup.string().required("Robots are not welcome yet!"),
    }),
  handleSubmit: async (
    { name, email, message, recaptcha },
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      const encode = data => {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&")
      }
      await fetch("/?no-cache=1", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name,
          email,
          message,
          // "g-recaptcha-response": recaptcha,
        }),
      })
      await setSubmitting(false)
      await setFieldValue("success", true)
      setTimeout(() => resetForm(), 2000)
    } catch (err) {
      setSubmitting(false)
      setFieldValue("success", false)
      alert("Something went wrong, please try again!")
    }
  },
})(ContactFormLayout)
