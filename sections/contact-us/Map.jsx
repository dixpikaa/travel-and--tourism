import React from 'react'

const Map = () => {
  return (
    <section clssName="mt-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.6590849507747!2d85.58009837472666!3d27.57308897625976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0a1fe3569ddb%3A0x63c489fc158a4ba1!2sNamo%20Buddha%20Temple!5e0!3m2!1sen!2snp!4v1684374197267!5m2!1sen!2snp"
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </section>
  )
}

export default Map