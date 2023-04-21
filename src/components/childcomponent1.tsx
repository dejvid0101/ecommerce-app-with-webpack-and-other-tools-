import React, { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createInputAction } from '../input'
import { Store, AppDispatch } from '../reduxstore'
import {rawItems, Item} from '../interfaces/interfaces'


export default function childcomponent1() {

  const dispatch: AppDispatch = useDispatch();
  const { value } = useSelector((state: any) => state.input);

  //uselayouteffect for execution only once
  useLayoutEffect(() => {
    //get data for backend server and set to state
    fetchData(dispatch);
  }, []);

// just in case, render loading if state is empty (if data hasn't been fetched yet)
  if (value == "") {
    return (
      <div className='test'>
        cc1: first item: Loading
      </div>
    )
  }

  const items:rawItems = JSON.parse(value);

  //return apt name from server from db
  return (
    <div className='test'>
      cc1: item: {items.recordset[5].Name}
    </div>
  )
}

function fetchData(dispatch: AppDispatch) {
  fetch("http://localhost:3001/api/getAll", {cache: "no-cache"})
    .then(res => res.text())
    .then(res => dispatch(createInputAction(res)))
    .catch(err => console.log(err));
}

