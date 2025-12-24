import React from 'react'
import cybersecurity from '../assets/img/cybersecurityCertificate.png'
import pythonCertificate from '../assets/img/pythonCertificate.jpg'
import sqlCertificate from '../assets/img/sqlCertificate.jpg'



const Certification = () => {
  return (
    <section id='certification' >
      <h2 className='certification-heading'>Certificates</h2>
      <div className='certificate-container'>
        <div className='certificate'>
          <img src={cybersecurity} alt='cybersecurity Certificate' />
          <p>CyberSecurity Basics By IBM</p>
        </div>
        <div className='certificate'>
          <img src={pythonCertificate} alt='Python Certificate' />
          <p>Python Basics for DataScience</p>
        </div>
        <div className='certificate'>
          <img src={sqlCertificate} alt='SQL Certificate' />
          <p>Introduction to SQL</p>
        </div>
        </div>

    </section>
  )
}

export default Certification
