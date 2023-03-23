import React from 'react'
import {useSelector} from 'react-redux'
import {Store} from '../reduxstore';
import {createInputAction, Input} from '../input'


export default function navbar() {
  //access the store state's reducer with name counter which returns the state object whose property we access in the third reference
const count=useSelector((state:any)=>state.counter.counter)

const inputField=React.useRef(null);

  return (
    <div className='test'>
      Cart: {count}
      <input ref={inputField}></input>
    </div>
  )
}
