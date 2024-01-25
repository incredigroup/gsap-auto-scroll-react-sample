import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './BoxAnim.css';

const BoxAnimation = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const setHeight = 50; // height of the boxes
    const numBoxes = document.querySelectorAll('.box').length; // quantity of boxes
    const totalHeight = numBoxes * setHeight;
    const wrapOffsetTop = setHeight / -2;
    const wrapOffsetBottom = totalHeight + wrapOffsetTop;
    const wrap = gsap.utils.wrap(wrapOffsetTop, wrapOffsetBottom);
    const yheight = '+=' + totalHeight * -15;

    // setTimeout(() => {
    //   tl.paused(true);
    // }, 3000)

    gsap.set('.box', {
      y: (i) => i * setHeight,
    });

    const tl = gsap.timeline();
    tl.to('.box', {
      duration: 5,
      ease: 'power1.out', //'none',
      y: yheight,
      modifiers: {
        y: gsap.utils.unitize(wrap),
      },
      repeat: 0,
    });

    // Helpers
    const pauser = document.getElementById('pauser');
    pauser.onclick = function () {
      tl.paused(!tl.paused());
    };

    const reset = document.getElementById('reset');
    reset.onclick = function () {
      tl.restart();
      tl.paused(true);
    };

    // Cleanup the animation when the component unmounts
    return () => {
      tl.kill();
    };
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div className="wrapper">
      <div className="boxes" ref={boxRef}>
        <div className="box border absolute border-blue-500 w-64 bg-blue-300">1</div>
        <div className="box border absolute border-blue-500 w-64 bg-blue-300">2</div>
        <div className="box border absolute border-blue-500 w-64 bg-blue-300">3</div>
        <div className="box border absolute border-blue-500 w-64 bg-blue-300">4</div>
        <div className="box border absolute border-blue-500 w-64 bg-blue-300">5</div>
        <div className="box border absolute border-blue-500 w-64 bg-blue-300">6</div>
        <div className="box border absolute border-blue-500 w-64 bg-blue-300">7</div>
        <div className="box border absolute border-blue-500 w-64 bg-blue-300"></div>
      </div>
    </div>
  );
};

export default BoxAnimation;
