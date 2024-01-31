import React from "react";
const navLists = [
  "Stock video",
  "video templetes",
  "music",
  "sound effects",
  "graphic templetes",
  "graphics",
  "presentation templetes",
  "photos",
  "fonts",
  "add-ons",
  "more",
];
const Navs = () => {
  return (
    <>
      <ul className='navs__container_lists'>
        {navLists.map((currElm) => {
          return <li key={currElm}>{currElm}</li>;
        })}
      </ul>
    </>
  );
};

export default Navs;
