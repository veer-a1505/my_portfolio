import React from 'react'

const Resume = (props) => {
  console.log(props)
  return (
    <div className='resume'>
      <div className='resume_title'>{/* <h1>Resume</h1> */}</div>

      <div className='resume_header'>
        <div className='resume_title'>
          <h2>Veeramanikandan Shanmugam</h2>
          <h3>Software Developer</h3>
        </div>

        <div className='resume_contact'>
          <ul>
            <div>
              <i className='fas fa-map-marker-alt'></i>

              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&t=h&ll=12.844312737889695%2C80.06622374999999&spn=0.010033%2C0.013733&z=13&source=embed&mid=1qJTcq5CaMdI4s4mNWp9Mi7QpJHQ'>
                {' '}
                <li>603202 Chennai, India</li>
              </a>
            </div>
            <div>
              <i className='far fa-envelope'></i>

              <a
                href='mailto:veerasaraha@gmail.com'
                target='_blank'
                rel='noreferrer'>
                {' '}
                <li>veerasaraha@gmail.com</li>
              </a>
            </div>

            <div>
              <i className='fas fa-mobile-alt'></i>
              <a href='tel:9551390553'>
                {' '}
                <li>+91 9551390553</li>
              </a>
            </div>
          </ul>
        </div>

        <div className='resume_contact'>
          <ul>
            <div>
              <i className='fab fa-linkedin'></i>
              <a
                href='https://www.linkedin.com/in/veeramanikandan-shanmugam-5947671b9/'
                target='_blank'
                rel='noreferrer'>
                {' '}
                <li>linkedin.com/in/veera-mani-5947671b9/</li>
              </a>
            </div>
            <div>
              <i className='fab fa-github'></i>
              <a
                href='https://github.com/veer-a1505?tab=repositories'
                target='_blank'
                rel='noreferrer'>
                {' '}
                <li>github.com/veer-a1505?tab=repositories</li>
              </a>
            </div>
          </ul>
        </div>
      </div>

      <div className='resume_education'>
        <h2 className='head_color'>Education</h2>
        <ul>
          <li>B.Com, S.R.M University</li>
          <li>2014 – 2017 | Chennai, India</li>
        </ul>
      </div>

      <div>
        <h2 className='skill_title head_color'>Skills</h2>
        <div className='resume_skill'>
          <div className='resume_skill_card'>
            <ul>
              <div className='resume_card_icons'>
                <div>
                  <h3>Frontend</h3>
                </div>
                <div>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'>
                    <i className='devicon-html5-plain-wordmark colored'></i>
                  </a>
                </div>

                <div>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
                    <i className='devicon-css3-plain-wordmark colored'></i>
                  </a>
                </div>
                <div>
                  <a
                    rel='noreferrer'
                    href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                    target='_blank'>
                    <i className='devicon-javascript-plain colored'></i>
                  </a>
                </div>
                <div>
                  <a
                    href='https://reactjs.org/'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='devicon-react-original-wordmark colored'></i>
                  </a>
                </div>

                <div>
                  <a
                    href='https://redux.js.org/'
                    target='_blank'
                    rel='noreferrer'>
                    <i class='devicon-redux-original colored'></i>
                  </a>
                </div>
              </div>
            </ul>
          </div>

          <div className='resume_skill_card'>
            <ul>
              <div className='resume_card_icons'>
                <div>
                  <h3>Backend</h3>
                </div>
                <div>
                  <a
                    href='https://nodejs.org/en/'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='devicon-nodejs-plain colored'></i>
                  </a>
                </div>
                <div>
                  <a
                    href='https://expressjs.com/'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='devicon-express-original colored'></i>
                  </a>
                </div>
                <div>
                  <a
                    href='https://docs.mongodb.com/manual/'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='devicon-mongodb-plain-wordmark colored'></i>
                  </a>
                </div>
                <div>
                  <a
                    href='https://www.postgresql.org/'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='devicon-postgresql-plain-wordmark colored'></i>
                  </a>
                </div>
              </div>
            </ul>
          </div>

          <div className='resume_skill_card'>
            <ul>
              <div className='resume_card_icons'>
                <div>
                  <h3>Tools/OS</h3>
                </div>
                <div>
                  <a
                    href='https://git-scm.com/'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='devicon-git-plain-wordmark colored'></i>
                  </a>
                </div>

                <div>
                  <a
                    href='https://code.visualstudio.com/v'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='devicon-visualstudio-plain colored'></i>
                  </a>
                </div>

                <div>
                  <a
                    href='https://www.linux.org/'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='devicon-linux-plain colored'></i>
                  </a>
                </div>

                <div>
                  <a
                    href='https://devcenter.heroku.com/categories/reference'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='devicon-heroku-original-wordmark colored'></i>
                  </a>
                </div>

                <div>
                  <a
                    href='https://www.npmjs.com/'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='devicon-npm-original-wordmark colored'></i>
                  </a>
                </div>
              </div>
            </ul>
          </div>

          <div className='resume_skill_card'>
            <ul>
              <div className='resume_card_icons'>
                <div>
                  <h3>Others</h3>
                </div>
                <div>
                  <a
                    href='https://www.python.org/'
                    target='_blank'
                    rel='noreferrer'>
                    {' '}
                    <i className='fab fa-python'></i>
                  </a>
                </div>

                <div>
                  <a
                    href='https://www.microsoft.com/en-ww/microsoft-365/excel'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='far fa-file-excel'></i>
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className='resume_courses'>
        <h2 className='head_color'>Courses</h2>
        <article>
          <h3>
            MongoDB Basics @{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://university.mongodb.com/'>
              MongoDB University
            </a>
          </h3>
          <ul>
            <li>Completed the course with grade of 91%.</li>
            <li>Learnt MongoDB basics and advanced CRUD operations.</li>
            <li>Creating and manipulating documents.</li>
            <li>Indexing and Aggregation.</li>
          </ul>
        </article>

        <article>
          <h3>
            React JS Workshop @{' '}
            <a target='_blank' rel='noreferrer' href='https://dataops.co.in/'>
              dataops.co.in
            </a>
          </h3>
          <ul>
            <li>
              Introduction to React.js basics i.e, Components , Hooks, etc.,
            </li>
            <li>
              Introduction to React.js state management library React Redux.
            </li>
          </ul>
        </article>
      </div>
    </div>
  )
}

export default Resume
