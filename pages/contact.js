import React, { Fragment } from 'react'
import ContactForm from '../components/contact/ContactForm'
import Head from 'next/head'

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Contact me!' />
      </Head>
      <ContactForm />
    </Fragment>
  )
}

export default Contact
