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
                  "I'm an aspiring web devloper, without <i>CS</i> Degree."
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
          {readMore ? 'Read Less' : 'Read More'}
        </button>

        {readMore ? (
          <div className='aboutme'>
            <p>
              Hi, I’m veeramanikandan, and am based in Chennai. I am a commerce
              graduate. I was completed my UG in SRM arts and science college
              back in 2017.
            </p>
            <p>
              Then after a few months of job-hunting, I got an offer letter from
              TCS(Tata Consultancy Services). After 3+ years of experience as a
              process associate ( related to banking ), I've started to learn to
              code, cause of the incident that happened in my project which made
              me think about technology.
            </p>
            <p>
              I started to learn the basics of the web & computer science and
              how all concept works behind the scene. Then I started with Python
              Programming language which very high level and user-friendly for
              every beginner to programming.
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Home
