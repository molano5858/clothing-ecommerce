import {Outlet,Link } from 'react-router-dom' 
import React from 'react'
import './navigation.styles.scss'
import {ReactComponent as CrwnLogo} from '../../../assets/crown.svg'
const Navigation = ()=>{
    return (
      <React.Fragment>
        <div className='navigation'>
            <Link className='logo-container' to={'/'}>
                <CrwnLogo />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to={'/shop'}>Shop</Link>
                <Link className='nav-link' to={'/signIn'}>Sign In</Link>
            </div>
        </div>
        <Outlet />
      </React.Fragment>
    )
  }

export default Navigation