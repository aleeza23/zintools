"use client";
import React, {useState} from "react";
import {MdKeyboardArrowDown} from "react-icons/md";
import Navs from "./Navs";
import {MdKeyboardArrowUp} from "react-icons/md";

const MobileNavs = () => {
  const [toggleNav, settoggleNav] = useState(false);

  return (
    <>
      <div className='mobile__nav'>
        <h1 className='font-bold -'>All items</h1>
        <button style={{fontSize : "2rem"}} onClick={() => settoggleNav((prev) => !prev)}>
          {toggleNav ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </div>
      <hr />
      {toggleNav && (
        <div className='mobile__navs__list shadow-lg'>
          <Navs />
        </div>
      )}
    </>
  );
};

export default MobileNavs;
