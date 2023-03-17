import React from 'react'

const Contact = () => {
  return (
    
    <section className="contact" id="contact">
    <h2>Get in  Touch <span>Contact Me</span></h2>
    <form action="" ref={form} onSubmit={sendEmail}>
      <div className="box">
      <input type="text" name="Name" placeholder='Name'  className='Name'  />
        <label htmlFor="">Name</label></div>
      <div className="box">
      <input type="Email" name="Email" placeholder='Email'  className='Email'  />
        <label htmlFor="">Email</label></div>
      <div className="box">
      <textarea type="text" name="Message" placeholder='Message' className='Message' />
        <label htmlFor="">Message</label></div>
      <input type="submit" value="Send" className='button Submit' />
    </form>
  </section>
  )
}

export default Contact