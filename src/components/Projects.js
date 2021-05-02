import React from 'react'
import imgage from './../images/budget_tracker.png'

const Projects = () => {
  return (
    <div className='projects' id='project'>
      <h1>Projects</h1>
      <div className='project_card'>
        <div>
          <img src={imgage} alt={'budget tracker'} />
        </div>

        <div>
          <h2>Budget Tracker</h2>
          <p>
            Tracks monthly expenses based current months income. It stores data
            using web browser's Local Storage, as it is my todo project so I
            didn't use database to store the data.
          </p>
          <div>
            <h4>React.js, Context API, React Hooks.</h4>
          </div>
          <div>
            <a
              href='https://react-budget-tracker-app.herokuapp.com/'
              target='_blank'>
              <button ur>View Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
