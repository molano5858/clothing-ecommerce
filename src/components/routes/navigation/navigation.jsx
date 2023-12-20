import {Outlet,Link } from 'react-router-dom' 
import React from 'react'
import {useContext} from 'react'
import './navigation.styles.scss'
import {ReactComponent as CrwnLogo} from '../../../assets/crown.svg'
import { UserContext } from '../../contexts/user'
const Navigation = ()=>{
  //voy a accesar al usuario que esta guardado en el contexto
  const {currentUser}=useContext(UserContext)
  console.log(currentUser)
    return (
      <React.Fragment>
        <div className='navigation'>
            <Link className='logo-container' to={'/'}>
                <CrwnLogo />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to={'/shop'}>Shop</Link>
                  {/* cuando el usuario ya esta adentro queremos renderizar un link distinto, en vez de entrar, pues salir 
                  sign in va a cambiar a sign out cuando ya entramos, esto funciona para ambos formularios, sign in y sign up*/}
                  {
                    currentUser ? (<span className='nav-link'>Sign out</span>) : <Link className='nav-link' to={'/auth'}>Sign In</Link>
                  }
                
            </div>
        </div>
        <Outlet />
      </React.Fragment>
    )
  }

export default Navigation