import React from "react";
import Card from "../card/Card";

const FromPdf = () => {
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
      desc: "Convert PDF files to a set of optimized JPG, PNG ...",
    },
    {
      image: "https://images.hipdf.com/images2022/icons/PDF-TXT.svg",
      title: "PDF to TXT",
      desc: "Convert your PDF to TXT, and extract text from your PDF.",
    },
  ];
  return (
    <>
      <div className='pdf__container lg:px-10 '>
        <h1 className='heading'>Convert from PDF</h1>

        <div className='pdf__grid__container'>
          {fromPdfData.map((elm, i) => (
            <Card key={i} data={elm} from='pdf' />
          ))}
        </div>
      </div>
    </>
  );
};

export default FromPdf;
