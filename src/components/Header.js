import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header className='pf-header'>
      <Link
        activeClass='active'
        to='home'
        spy={true}
        smooth={true}
        offset={-85}>
        <li>Home</li>
      </Link>

      {/* <Link
        activeClass='active'
        to='about'
        spy={true}
        smooth={true}
        offset={-90}>
        <li>Who Am I</li>
      </Link> */}

      <Link
        activeClass='active'
        to='project'
        spy={true}
        smooth={true}
        offset={-90}>
        <li>Projects</li>
      </Link>

      <Link
        activeClass='active'
        to='contact'
        spy={true}
        smooth={true}
        offset={90}>
        <li>Get in touch</li>
      </Link>
    </header>
  )
}

export default Header
