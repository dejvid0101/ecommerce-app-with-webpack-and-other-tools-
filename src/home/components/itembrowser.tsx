import * as React from "react";
import Itemcard from './itemcard'
import {State, Item} from '../../interfaces/interfaces'
import { useSelector, useDispatch } from 'react-redux'


export default function ItemBrowser() {
  //read state to pass each item to respective item card
  const state: State = useSelector((state:any) => state);

  return (

    <div className="itembrowser">
      <ul className="ul-itembrowser">
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
            <Itemcard Item={state.items[0]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state.items[1]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state.items[2]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state.items[3]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state.items[4]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state.items[5]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state.items[6]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state.items[7]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state.items[8]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state.items[9]}></Itemcard>
          </div>
        </li>
      </ul>
    </div>
  )
}

