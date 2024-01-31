import Container from "@/components/Container";
import Bookmarks from "@/components/bookmark/Bookmarks";
import Slider from "@/components/card slider/Slider";
import Footer from "@/components/footer/Footer";
import FromPdf from "@/components/from pdf/FromPdf";
import DesktopNavs from "@/components/header/DesktopNavs";
import Header from "@/components/header/Header";
import MobileNavs from "@/components/header/MobileNavs";
import ToPdf from "@/components/to pdf/ToPdf";

export default function Home() {
  return (
    <>
      <main className='main-container shadow'>
        <div className='container'>
          <Header />
          <DesktopNavs />
        </div>
      </main>

      <Container>
        <MobileNavs />

        <Bookmarks />
        <Slider />

        <FromPdf />
        <ToPdf />
      </Container>
      <Footer />
    </>
  );
}
