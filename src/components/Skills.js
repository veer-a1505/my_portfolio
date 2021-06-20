import React from 'react'

const Skills = (props) => {
  console.log(props)
  return (
    <div className='skills'>
      {/* FRONTEND */}

      <div>
        <h2>FRONTEND</h2>
        <div className='skills_icons'>
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
            <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
              <i className='devicon-react-original-wordmark colored'></i>
            </a>
          </div>

          <div>
            <a href='https://redux.js.org/' target='_blank' rel='noreferrer'>
              <i class='devicon-redux-original colored'></i>
            </a>
          </div>
        </div>
      </div>

      {/* BACKEND */}
      <div>
        <h2>BACKEND</h2>
        <div className='skills_icons'>
          <div>
            <a href='https://nodejs.org/en/' target='_blank' rel='noreferrer'>
              <i className='devicon-nodejs-plain colored'></i>
            </a>
          </div>
          <div>
            <a href='https://expressjs.com/' target='_blank' rel='noreferrer'>
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
      </div>

      <div>
        <h2>TOOLS/OS</h2>
        <div className='skills_icons other-icons'>
          <div>
            <a href='https://git-scm.com/' target='_blank' rel='noreferrer'>
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
            <a href='https://www.linux.org/' target='_blank' rel='noreferrer'>
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
            <a href='https://www.npmjs.com/' target='_blank' rel='noreferrer'>
              <i className='devicon-npm-original-wordmark colored'></i>
            </a>
          </div>
        </div>
      </div>
      {/* 
      <div>
        <h2>OTHERS</h2>
        <div className='skills_icons'>
          <div>
            <a href='https://www.python.org/' target='_blank' rel='noreferrer'>
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
      </div> */}
    </div>
  )
}

export default Skills
