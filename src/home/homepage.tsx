import React, { useLayoutEffect } from 'react'
import Childcomponent1 from '../components/childcomponent1'
import Childcomponent2 from '../components/childcomponent2'
import { useSelector, useDispatch } from 'react-redux'
//import {increment} from '../counter'
import ItemBrowser from './components/itembrowser'
import Navbar from './components/navbar'
import { json } from 'express'
import { rawItems, Item } from '../interfaces/interfaces'
import { Store, AppDispatch } from '../reduxstore'
import { setItems } from '../items'
var _ = require('lodash');


export default function HomePage() {
  //usesSelector(state_object_in_store)=>state_object_in_store.reducer_with_name_items
  const state: Item[] = useSelector((state: any) => state.items);

  const dispatch: AppDispatch = useDispatch();

  //uselayouteffect for execution only once
  useLayoutEffect(() => {
    //raw server response
    let rawItems: rawItems = undefined;
    //serverresponse.recordset object with items
    let items: Item[] = undefined;

    fetch("http://localhost:3001/api/getAll", { cache: "no-cache" })
      .then(res => res.text())
      .then(res => {
        rawItems = JSON.parse(res);
        items = rawItems.recordset;
        //send action with payload to reducer defined in itemsSlice
        dispatch(setItems(items));
      })
      .catch(err => { return err });

  }, []);



  //if items state is an empty array (as initially defined in items slice, not yet fetched), render placeholders (to avoid errors in itembrowser)
  if (_.isEqual(state, [])) {
    return (
      <>
        <Navbar></Navbar>
        <div>Placeholders...</div>
      </>
    )
  }

  //otherwise render itembrowser
  return (
    <>
      <Navbar></Navbar>
      <ItemBrowser></ItemBrowser>
      {/* <Childcomponent1></Childcomponent1>
<Childcomponent2></Childcomponent2>
button click calls the increment action defined in one of the reducers registered on the redux store object
<button className='test' onClick={()=>dispatch(increment())}>Add to cart lol</button> */}
    </>
  )
}