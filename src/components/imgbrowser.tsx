import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AptImg } from '../interfaces/interfaces'
import { createRoutesFromChildren } from 'react-router-dom';

interface imgbrowserprop {
  ImgArray: AptImg[]
}

let totalWidth:number = 0;
let rerender:boolean=false;

export default function imgbrowser(prop: imgbrowserprop) {
  const imgarray: AptImg[] = prop.ImgArray;
console.log('render')

  const [ref, setRef] = useState([]);
  const [imgRef, setImgRef] = useState([]);
  const [width, setWidth] = useState(0);

  const widthRef = useRef(null);

  const imgWidthRefs = useRef([]);

  //ready when DOM is rendered:
  //images aligned width
  console.log(totalWidth);

  //window width
  console.log(window.innerWidth);

  //when DOM is rendered, calculate total imgs aligned width
  useEffect(() => {
    //don't execute if already executed
    if(!rerender){

    for (let i = 0; i < imgWidthRefs.current.length; i++) {
      console.log(imgWidthRefs.current[i].offsetWidth);
      totalWidth = totalWidth + imgWidthRefs.current[i].offsetWidth;
    }

    rerender=true;

    //why all imgs not rendered on first visit? important?
  }

  }, []);

  //set width to state when ref is defined and set to state (DOM is rendered)
  useEffect(() => {
    const setWidthtoState = () => setWidth(widthRef.current.offsetWidth);

    setWidthtoState();

    window.addEventListener('resize', setWidthtoState);

    //remove eventlistener on return

  }, [ref]);

  //set ref to state when dom is rendered
  useEffect(() => {
    setRef([widthRef]);
    setImgRef([imgWidthRefs]);
  }, []);

  //if width > window.width, render browser buttons
  return (
    <div ref={widthRef} className='imgbrowser-imgwrapper'>
      {imgarray.map((img, index) => (
        <img className='imgbrowser-img' ref={el => (imgWidthRefs.current[index] = el)} src={img.ImgUrl} key={index} />
      ))}
    </div>
  )
}
