import Image from "next/image";
import React from "react";
import {FaRegBookmark} from "react-icons/fa";

const Card = ({data, from,className}) => {
  return (
    <>
      <div className={`${className} card__container`}>
        <Image
          src={data.image}
          width={50}
          height={50}
          alt='img'
          className='card__container_icon'
        />
        {from === "pdf" && <FaRegBookmark className="card__container_bookmark" />}
        <h1 className='card__container_title'>{data.title}</h1>
        <p className='card__container_desc'>{data.desc}</p>
      </div>
    </>
  );
};

export default Card;
