import * as React from 'react'
import Childcomponent1 from './childcomponent1'
import Childcomponent2 from './childcomponent2'
import {useSelector, useDispatch} from 'react-redux'
import {increment} from '../counter'

export default function maincontent() {
  //usesSelector(state_object_in_store)=>state_object_in_store.reducer_with_name_counter.reducer_states_property_named_counter
  const count=useSelector((state:any)=>state.counter.counter);
  
  const dispatch=useDispatch();

  return (
    <>
<Childcomponent1></Childcomponent1>
<Childcomponent2></Childcomponent2>
{/* button click calls the increment action defined in one of the reducers registered on the redux store object */}
<button className='test' onClick={()=>dispatch(increment())}>Add to cart lol</button>
    </>
  )
}