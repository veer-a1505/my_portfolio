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
          <a href='https://twitter.com/Veer_1505' target='_blank'>
            <i className='fab fa-twitter'></i>
          </a>
        </div>

        <div>
          <a
            href='https://www.linkedin.com/in/veera-mani-5947671b9/'
            target='_blank'>
            <i className='fab fa-linkedin'></i>
          </a>
        </div>

        <div>
          <a href='https://github.com/veer-a1505' target='_blank'>
            <i className='fab fa-github-square'></i>
          </a>
        </div>

        <div>
          <a href='mailto:veerasaraha@gmail.com' target='_blank'>
            <i className='fas fa-envelope'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
