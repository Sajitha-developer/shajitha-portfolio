import React from 'react'
import img from  '/src/assets/about_girl_img1-removebg-preview.png'
import '../index.css'

const About = () => {
    
    const para = {
        line1 : "hi, my name is shajitha begam. i am a web developer. i build beautiful websites with react.js, tailwind css.... ",
        line2 : "i am  proficient in frontens skills like react.js, HTML,CSS,Javascript,Tailwind CSS, and many more.",
        line3 : "i also have experience in Git and GitHub..",
    };

  return (
    <section className='about' id='about'>
        
            <img src={img} alt="about me" />
            <div className ="about_text">
                <h1>About me</h1>
                <p>{para.line1}</p>
                <p>{para.line2}</p>
                <p>{para.line3}</p>
            </div>

    
    </section>
  )
}

export default About
