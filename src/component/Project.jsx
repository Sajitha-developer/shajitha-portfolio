import React from 'react'
import projectimg1 from '/src/assets/HTMIL,CSS,JS img1.jpg'
import projectimg2 from '/src/assets/Udemy img2.jpg'
import projectimg3 from '/src/assets/react and tailwind css img3.jpg'

const Project = () => {

    const parah ={
        projests :[
            {
                image : projectimg1,
                description: 'An E-commerce Website. Built with HTML, CSS, JS.',
                link :"https://sajitha-developer.github.io/WardRobe"

            },
            {
                image : projectimg2,
                description: 'A Udemy Clone. Built with HTML, CSS & React Js.',
                link : "https://sajitha-developer.github.io/Udemy-project/"

            },
            {
                image : projectimg3,
                description: 'An ActTodo App. Built with React.js & Tailwind CSS.',
                link : " "

            },

        ]
    };

  return (
    <section className='project' id='project'>
<div className='project__container'>
    <div className='project__header'>
        <h1>Projects</h1>
        <p>These are some of my best projects. I have built them with React.js, CSS, HTML, and JavaScript. Check them out.</p>


    </div>
    <div className='project__list'>
        {
            parah.projests.map((project, index) => (

                <div className='project-card' key={index}>
                    <img className='project-img' src={project.image} alt="project preview" />
                 <div className='project-desc'><p>{project.description}</p></div>
                 
                 <a href={project.link} target="_blank"className='btn-project'>View Project</a>
                </div>
            ))
        }

    </div>
     
</div>
    </section>
  )
}

export default Project
