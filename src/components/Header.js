import React from 'react'
import { Link } from 'react-router-dom'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import HomeIcon from '@material-ui/icons/Home'

const Header = () => {
  return (
    <header className='pf-header'>
      <ul>
        <li>
          <Link to='/'>
            <HomeIcon fontSize='large' />
          </Link>
        </li>
        <li>
          <Link to='/skills'>
            <i class='fas fa-tools fa-2x'></i>
          </Link>
        </li>
        <li>
          <Link to='/projects'>
            <AccountTreeIcon fontSize='large' />
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <PermContactCalendarIcon fontSize='large' />
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
