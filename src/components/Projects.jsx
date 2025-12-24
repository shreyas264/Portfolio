import React from 'react'
import bookstore from '../assets/img/bookStore.png'
import chat from '../assets/img/parabChat.png'
import resumeAnalyzer from '../assets/img/resumeAnalyzer.png'


const Projects = () => {
  return (
    <section id='projects'>
        <h2>Projects</h2>
        <div className='project-card'>
            <div>
                <img src={bookstore} alt='bookStore'/>
                <h3>Book Store MERN</h3>
                <a href='https://bookstore-mern-77bk.onrender.com' target='blank' rel='noopener noreferrer'>View Project</a>
            </div>
            <div>
                <img src={chat} alt='chat app'/>
                <h3>Community Chat App</h3>
                <a href='https://parab-chat-app-frontend.onrender.com' target='blank' rel='noopener noreferrer'>View Project</a>
            </div>
            <div>
                <img src={resumeAnalyzer} alt='resume analyzer'/>
                <h3>Resume Analyzer</h3>
                <a href='https://resume-analyzer-frontend-d7f4.onrender.com' target='blank' rel='noopener noreferrer'>View Project</a>
            </div>
        </div>
    </section>
  )
}

export default Projects
