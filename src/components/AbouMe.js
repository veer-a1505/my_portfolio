import React, { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core'
import { ExpandMoreOutlined } from '@material-ui/icons'
import data from './accordionData'

const AboutMe = () => {
  return (
    <div className='about' id='about'>
      <div>
        {data.map((accordion) => {
          const { id, question, answer } = accordion

          return (
            <div className='about-box' key={id}>
              <div className='box-question'>{question}</div>
              <div className='box-answer'>{answer}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutMe
