import * as React from 'react'
import {useSelector} from 'react-redux'


export default function navbar() {
  //access the store state's reducer with name counter which returns the state object whose property we access in the third reference
const count=useSelector((state:any)=>state.counter.counter)

  return (
    <div className='test'>
      Cart: {count}
    </div>
  )
}
