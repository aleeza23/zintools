import React from "react";
import Card from "../card/Card";

const ToPdf = () => {
  const fromPdfData = [
    {
      image: "https://images.hipdf.com/images2022/icons/word-pdf.svg",
      title: "Word to PDF",
      desc: "The best Word to PDF converter online.",
    },
    {
      image: "https://images.hipdf.com/images2022/icons/PPT-PDF.svg",
      title: "PPT to PDF",
      desc: "Convert Powerpoint to PDF online.",
    },
    {
      image: "https://images.hipdf.com/images2022/icons/Excel-PDF.svg",
      title: "Excel to PDF",
      desc: "Easily Convert Excel spreadsheet to PDF.",
    },
    {
      image: "https://images.hipdf.com/images2022/icons/jpg-pdf.svg",
      title: "JPG to PDF",
      desc: "Convert JPG, PNG, BMP, GIF and TIFF images to PDF.",
    },
    {
      image: "https://images.hipdf.com/images2022/icons/Image-in-TXT.svg",
      title: "TXT to PDF",
      desc: " Convert TXT to PDF online for free.",
    },
  ];
  return (
    <>
      <div className='pdf__container lg:px-10'>
        <h1 className='heading'>Convert to PDF</h1>

        <div className='pdf__grid__container'>
          {fromPdfData.map((elm, i) => (
            <Card key={i} data={elm} from='pdf' />
          ))}
        </div>
      </div>
    </>
  );
};

export default ToPdf;
