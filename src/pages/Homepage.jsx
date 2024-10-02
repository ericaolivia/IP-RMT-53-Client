import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import { useRef } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Homepage() {
  const targetRef = useRef(null);

  return (
    <div className="flex flex-col">
      <Navbar />
      <Carousel />
      <Hero targetRef={targetRef}/>
      <div ref={targetRef} className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-10 py-10">
        <h1 className="text-left">Explore Recipes</h1>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
