import Image from "next/image";
import img01 from "../../assets/editPDF.svg";
import img02 from "../../assets/Crop-PDF.svg";
import img03 from "../../assets/replace-text-pdf.svg";
import img04 from "../../assets/Rotate-PDF.svg";
import Card from "../card/Card";

const BookMarkData = [
  {
    image: img01,
    title: "Edit PDF",
    desc: "Use the best online tool to edit PDFs in your browser.",
  },
  {
    image: img02,
    title: "Crop PDF",
    desc: "Crop PDF online to a selected area, adjust ...",
  },
  {
    image: img03,
    title: "Replace Text",
    desc: "The easiest way to replace text online.",
  },
  {
    image: img04,
    title: "Rotate PDF",
    desc: "Rotate and save your PDF pages online for free.",
  },
];
const Bookmarks = () => {
  return (
    <>
      <div className=' bookmark__container lg:px-10'>
      <h1 className="heading">Your Bookmarks</h1>
        <div className='grid__container'>
          {BookMarkData.map((elm, i) => (
            <Card key={i} data={elm} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
