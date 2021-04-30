import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core'
import { ExpandMoreOutlined } from '@material-ui/icons'

import React, { useState } from 'react'
import data from './accordionData'
console.log(data)
const AboutMe = () => {
  const [expanded, setExpanded] = useState(-1)

  const handleChange = (panel) => (e, newPanel) => {
    setExpanded(newPanel ? panel : -1)
  }

  return (
    <div className='about' id='about'>
      {data.map((accordion) => {
        const { id, question, answer } = accordion
        return (
          <Accordion
            key={id}
            expanded={expanded === id}
            onChange={handleChange(id)}>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Typography>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>{answer}</AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}

export default AboutMe
