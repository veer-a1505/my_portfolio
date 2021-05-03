import React, { useState } from 'react'
import TypeWriter from 'typewriter-effect'

const Home = () => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div className='home' id='home'>
      <div className='intro-text'>
        <h1>Hey, I'm Veera</h1>
        <h3>
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "I'm an aspiring full-stack web devloper, wthout <i>CS</i> Degree."
                )
                .start()
                .changeDelay(100)
            }}
          />
        </h3>
        <button
          onClick={() => {
            setReadMore(!readMore)
          }}>
          {readMore ? 'Read less' : 'Read More'}
        </button>

        {readMore ? (
          <p>
            I have become passionate about technology such as React, Node,
            MongoDB, Express and I do have practical exposure to those
            technologies.
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Home
