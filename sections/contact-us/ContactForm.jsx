import { ContactUsForm } from '@/components'
import React from 'react'

const ContactForm = () => {
  return (
    <section className="bg-white p-8 mb-8">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Get a free Keystroke quote now</h1>
        <p>Your email address will not be published. Required fields are marked *</p>
      </div>
      <ContactUsForm/>
    </section>
  )
}

export default ContactForm