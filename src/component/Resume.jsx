import React from 'react'
import '../index.css'
import resumeimg from '/src/assets/girlresume.jpg'
const Resume = () => {

const parag = {
    lines1: 'you can view my resume'
};

  return (
    <section className='resume' id='resume'>
        <div className='resume__container'>
            <img src={ resumeimg} alt="resume" className='resume-img'/>

            </div>
        <div className='resume-content'>
            <h1 className='resume-title'>resume</h1>
            <p className='resume-desc'>{parag.lines1}
            <button className='resume-btn'>Download</button>

          </p>
       
        </div>
    </section>
  )
}

export default Resume
