import React from 'react'

const Projects = () => {
  return (
    <section id='projects'>
        <h2>Projects</h2>
        <div className='project-card'>
            <div>
                <img src='/src/assets/img/bookStore.png' alt='bookStore'/>
                <h3>Book Store MERN</h3>
                <a href='https://bookstore-mern-77bk.onrender.com' target='blank' rel='noopener noreferrer'>View Project</a>
            </div>
            <div>
                <img src='/src/assets/img/parabChat.png' alt='chat app'/>
                <h3>Community Chat App</h3>
                <a href='https://parab-chat-app-frontend.onrender.com' target='blank' rel='noopener noreferrer'>View Project</a>
            </div>
            <div>
                <img src='/src/assets/img/resumeAnalyzer.png' alt='resume analyzer'/>
                <h3>Resume Analyzer</h3>
                <a href='https://resume-analyzer-frontend-d7f4.onrender.com' target='blank' rel='noopener noreferrer'>View Project</a>
            </div>
        </div>
    </section>
  )
}

export default Projects
