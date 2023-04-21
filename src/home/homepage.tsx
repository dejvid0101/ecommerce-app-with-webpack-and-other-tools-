import React, { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import {increment} from '../counter'
import ItemBrowser from './components/itembrowser'
import { json } from 'express'
import {State, rawItems, Item, TagAptCon, rawTagAptCons, rawTags, Tag } from '../interfaces/interfaces'
import { Store, AppDispatch } from '../reduxstore'
import { setItems } from '../items'
import { setTagAptCons } from '../tagaptcons'
import { setTags } from '../tags'
var _ = require('lodash');


export default function HomePage() {
  //usesSelector(state_object_in_store)=>state_object_in_store.reducer_with_name_items

  
  
  const state: State = useSelector((state: any) => state);


  //http://localhost:3001/api/getTags

  //if items state is an empty array (as initially defined in items slice, not yet fetched), render placeholders (to avoid errors in itembrowser)
  if (_.isEqual(state.items, [])) {
    return (
        <div>Placeholders...</div>
    )
  }

  //otherwise render itembrowser
  return <ItemBrowser></ItemBrowser>
      {/* <Childcomponent1></Childcomponent1>
<Childcomponent2></Childcomponent2>
button click calls the increment action defined in one of the reducers registered on the redux store object
<button className='test' onClick={()=>dispatch(increment())}>Add to cart lol</button> */}
  
}