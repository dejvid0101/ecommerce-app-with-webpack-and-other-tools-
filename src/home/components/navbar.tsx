import React from 'react'
import {useSelector} from 'react-redux'
import {Store} from '../../reduxstore';
import {createInputAction, Input} from '../../input'


export default function navbar() {

  return (
    <nav className='navbar'>
      <div className='navbar-logo-wrapper'></div>
      <div className='navbar-searchbar-wrapper'></div>
<div className='navbar-cart-wrapper'>
  <div className='cart-counter-wrapper'>
    <span className='cart-counter'>0</span>
    </div>
</div>
    </nav>
  )
}
