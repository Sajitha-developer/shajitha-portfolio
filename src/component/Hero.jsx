import React from 'react'
import imgGirl from '/src/assets/girl-with-glasses-laptop_1026278-26015_-_Copy__2___1_-removebg-preview.png'

const Hero = () => {
  return (
    <section className='sub_header'>
    <div className='container__s1'>
        <h1>Hi...❤️, </h1>
        <h1>I am</h1>
        <h1 style={{color: " #ffcc00",textAlign:'center'}}>Shajitha Begam </h1>
        <p>I'm a Front-End developer</p>
    <div className='container__icons'>
    <p><i className="fa-brands fa-linkedin"></i></p>
    <p><i className="fab fa-github"></i></p>
    <p><i className="fa-brands fa-square-whatsapp"></i></p>
    </div>
     </div>
    <div className='container__img'>
    <img src={imgGirl} alt="Girl" className='img1'/>
    </div>

</section>
   

  )
}

export default Hero
