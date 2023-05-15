import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <Link to='/'>Home</Link>
        <Link to='/normalHook'>Show Text Using useState</Link>
        <Link to='/customHook'>Basic Custom Hook</Link>
        <Link to='/abstrakCustomHook'>Custom Hook Fect API</Link>
        <Link to='/exercise'>Exercise</Link>
    </>
  )
}

export default Navbar