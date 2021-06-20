import React from 'react'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h1>Contact</h1>
      <div>
        <p>
          I'll be active on the following social platforms. You can contact me
          through.
        </p>
      </div>

      <div className='contact_list'>
        <div>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://twitter.com/Veer_1505'>
            <i className='fab fa-twitter twitter'></i>
          </a>
        </div>

        <div>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/veera-profile-1505/'>
            <i className='fab fa-linkedin'></i>
          </a>
        </div>

        <div>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/veer-a1505'>
            <i className='fab fa-github-square'></i>
          </a>
        </div>

        <div>
          <a
            target='_blank'
            rel='noreferrer'
            href='mailto:veerasaraha@gmail.com'>
            <i className='fas fa-envelope'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
