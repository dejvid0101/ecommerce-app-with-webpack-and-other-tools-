import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, Store } from '../reduxstore';
import { createInputAction, Input } from '../input'
import { Item, State, Tag, TagAptCon, rawItems, rawTagAptCons, rawTags } from '../interfaces/interfaces';
import { setTagAptCons } from '../tagaptcons';
import { setTags } from '../tags';
import { setItems } from '../items';


export default function navbar() {

  const state: State = useSelector((state: any) => state);

  const dispatch: AppDispatch = useDispatch();

  //uselayouteffect for execution only once, fetches required data and sets to state
  useLayoutEffect(() => {
    //raw server response
    let rawItems: rawItems = undefined;
    let rawTagAptCons: rawTagAptCons = undefined;
    let rawTags:rawTags=undefined;

    //serverresponse.recordset object with items
    let items: Item[] = undefined;
    //must be initialised for db object mapping
    let TagAptCons: TagAptCon[] = [];
    let Tags: Tag[]=undefined;

    fetch("http://localhost:3001/api/getTagAptCons", { cache: "no-cache" })
      .then(res => res.text())
      .then(res => {
        rawTagAptCons = JSON.parse(res);

        //create TagAptCons array and set to state
        rawTagAptCons.recordset.forEach(rawTagAptCon => {
          TagAptCons.push({
            AptId: rawTagAptCon.ApartmentId,
            TagId: rawTagAptCon.TagId
          } as TagAptCon)
        });

        //send action with payload to reducer defined in tagaptconsSlice
        dispatch(setTagAptCons(TagAptCons));
      })
      .catch(err => { return err });

      fetch("http://localhost:3001/api/getTags", { cache: "no-cache" })
      .then(res => res.text())
      .then(res => {
        rawTags = JSON.parse(res);

        //create TagAptCons array and set to state
        Tags=rawTags.recordset;

        //send action with payload to reducer defined in tagaptconsSlice
        dispatch(setTags(Tags));
      })
      .catch(err => { return err });


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
