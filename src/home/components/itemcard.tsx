import React from 'react'
import { img1, img2 } from '../../images';
import {Item} from '../../interfaces/interfaces'
import {ItemProps} from '../../interfaces/interfaces'

//for prop drilling (now handled by redux store)


export default function itemcard({Item}:ItemProps) {
  return (
    <div className="item-card">
              <div className="img-wrapper">
                {/* one img remains hidden depending on item-card-wrapper's hover element */}
                <img src={img1} className='img1'></img>
                <img src={img2} className='img2'></img>
              </div>
              <div className="desc-wrapper">
                <div className="desc-primary-element">
                  {Item.Name}
                </div>
                <div className="desc-secondary-element">
                  {/* one desc remains hidden depending on item-card-wrapper's hover element */}
                  <div className="desc-1">{Item.Address}</div>
                  <div className="desc-2">Tuš kabina, Pećnica...</div>
                </div>
                <div className="price-element">
                  <div className="price-button">
                    <div className="price-button-content">14,99&gt;</div>
                    </div>
                </div>
              </div>
            </div>
  )
}
