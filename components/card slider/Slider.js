"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React from "react";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import Card from "../card/Card";

const Slider = () => {
  const fromPdfData = [
    {
      image: "https://images.hipdf.com/images2022/icons/pdf-word.svg",
      title: "PDF to Word",
      desc: "Easily convert PDF to Word document.",
    },
    {
      image: "https://images.hipdf.com/images2022/icons/PDF-PPT.svg",
      title: "PDF to PPT",
      desc: "Convert PDF to Powerpoint online.",
    },
    {
      image: "https://images.hipdf.com/images2022/icons/pdf-excel.svg",
      title: "PDF to Excel",
      desc: "Convert PDF to xls for free.",
    },
    {
      image: "https://images.hipdf.com/images2022/icons/PDF-JPG.svg",
      title: "PDF to JPG",
      desc: "Convert PDF files to a set of optimized JPG, PNG, BMP, GIF or TIFF images.",
    },
    {
      image: "https://images.hipdf.com/images2022/icons/PDF-TXT.svg",
      title: "PDF to TXT",
      desc: "Convert your PDF to TXT, and extract text from your PDF.",
    },
    {
      image: "https://images.hipdf.com/images2022/icons/PDF-RTX.svg",
      title: "PDF to RTX",
      desc: " Convert PDF to RTF online and free..",
    },
    {
      image: "https://images.hipdf.com/images2022/icons/PDF-Pages.svg",
      title: "PDF to Pages",
      desc: " Convert PDF to Pages on Mac and Windows.",
    },
    {
      image: "https://images.hipdf.com/images2022/icons/pdf-html.svg",
      title: "PDF to HTML",
      desc: "    Convert your PDF documents to HTML web page.",
    },
    {
      image: "https://images.hipdf.com/images2022/icons/PDF-DXF.svg",
      title: "PDF to DXF",
      desc: " The best online tool to convert PDF to DXF online.",
    },
  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <>
      <div className='pdf__container'>
        <div className='container relative'>
          <div className='title-btns'>
            <h1 className='heading'>Convert from PDF</h1>
            <button
              style={{
                backgroundColor: "#f1f3f4",
                width: "4.5rem",
                height: "2.3rem",
                borderRadius: "15px",
                fontWeight: "bold",
              }}
            >
              All {">"}
            </button>
          </div>
          <div className='row-container' id='slider'>
            {fromPdfData.map((elm, i) => (
              <Card
                from={"pdf"}
                className={"min-w-[180px] "}
                key={i}
                data={elm}
              />
            ))}
          </div>
          <div className='btns'>
            <button
              title='scroll left'
              className='left__btn'
              onClick={slideLeft}
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              title='scroll right'
              className='right__btn'
              onClick={slideRight}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
