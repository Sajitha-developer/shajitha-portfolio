import React from 'react'

const Contact = () => {

    const para = {
        line1: 'If you want to discuss more in detail, please contact me'

    }
  return (
      <section className='contact' id='contact'>
        <div className='contact_container'>
                <h1 className='contact-text'>Contact us</h1>
                <p className='contact-desc'>{para.line1}</p>

                <div className='contact__s1'>
   <span><i className="fa-solid fa-location-dot"></i><b>4/24, Pallivasal St,.Keelavalavu.</b></span><br /><br />
      <span><b><i className="fa-solid fa-phone"></i>8807780112</b></span><br /><br />
  <span><b><i className="fa-solid fa-envelope"></i>shajithabegam202@gmail.com</b></span>
                </div>
        </div>
      </section>
  )
}

export default Contact
