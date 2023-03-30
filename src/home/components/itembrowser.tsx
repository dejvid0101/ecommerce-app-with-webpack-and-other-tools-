import * as React from "react";
import Itemcard from './itemcard'
import {Item} from '../../interfaces/interfaces'
import { useSelector, useDispatch } from 'react-redux'


export default function ItemBrowser() {
  //read state to pass each item to respective item card
  const state: Item[] = useSelector((state:any) => state.items);

  return (

    <div className="itembrowser">
      <ul className="ul-itembrowser">
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
            <Itemcard Item={state[0]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state[1]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state[2]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state[3]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state[4]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state[5]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state[6]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state[7]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state[8]}></Itemcard>
          </div>
        </li>
        <li className="li-itembrowser">
          <div className="item-card-wrapper">
          <Itemcard Item={state[9]}></Itemcard>
          </div>
        </li>
      </ul>
    </div>
  )
}

