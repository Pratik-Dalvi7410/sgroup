import Home from "./pages/Home";
import Header from "./components/header/Header";
import Product from "../src/products/Product";
import Contact from "../src/contacts/Contact";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import PackagingFilm from "./products/productList/PackagingFilm";
import TubingFilms from "./products/productList/TubingFilms";
import Busbar from "./products/productList/Busbar";
import ShrinkLabelsPVC from "./products/productList/ShrinkLabelsPVC";
import PetCastShrinkLabels from "./products/productList/PetCastShrinkLabels";
import PlainAndPrintedPouches from "./products/productList/PlainAndPrintedPouches";
import PearlizedBopp from "./products/productList/PearlizedBopp";
import TransparentBopp from "./products/productList/TransparentBopp";
import SelfAdhesiveLabel from "./products/productList/SelfAdhesiveLabel";
import Standuppouch from "./products/productList/Standuppouch";
import ShapedPouches from "./products/productList/ShapedPouches";
import SideSealPouches from "./products/productList/SideSealPouches";
import KraftPouch from "./products/productList/KraftPouch";
import PouchesWithHandle from "./products/productList/PouchesWithHandle";
import SpoutPouch from "./products/productList/SpoutPouch";
import WindowPouches from "./products/productList/WindowPouches";
import CentreSealPouches from "./products/productList/CentreSealPouches";
import AluminiumFoilPouches from "./products/productList/AluminiumFoilPouches";
import PaperPouches from "./products/productList/PaperPouches";
import SideGussetPouch from "./products/productList/SideGussetPouch";
import ZipperPouch from "./products/productList/ZipperPouch";
import TransparentPouches from "./products/productList/TransparentPouches";
import ShrinkWrap from "./products/productList/ShrinkWrap";
import LDPEMilkBag from "./products/productList/LDPEMilkBag";
import Corrugatedbox from "./products/productList/Corrugatedbox";
import Footer from "../src/components/footer/Footer";
import Map from "../src/components/GoogleMap/Map";
import useWindowDimensions from "./hooks/Dimensions";
import { HiChevronDoubleUp } from "react-icons/Hi";

function App() {
  const { scrollY } = useWindowDimensions();

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Home />
      <Product />
      <Contact />
      <PackagingFilm />
      <TubingFilms />
      <Busbar />
      <ShrinkLabelsPVC />
      <PetCastShrinkLabels />
      <PlainAndPrintedPouches />
      <PearlizedBopp />
      <TransparentBopp />
      <SelfAdhesiveLabel />
      <Standuppouch />
      <ShapedPouches />
      <SideSealPouches />
      <KraftPouch />
      <PouchesWithHandle />?
      <SpoutPouch />
      <WindowPouches />
      <CentreSealPouches />
      <AluminiumFoilPouches />
      <PaperPouches />
      <SideGussetPouch />
      <ZipperPouch />
      <TransparentPouches />
      <ShrinkWrap />
      <LDPEMilkBag />
      <Corrugatedbox />
      <Footer />
      <Map />
      {scrollY > 200 ? (
        <div onClick={scrollToTop} className="scrollToTop">
          <HiChevronDoubleUp />
        </div>
      ) : null}
    </>
  );
}

export default App;
