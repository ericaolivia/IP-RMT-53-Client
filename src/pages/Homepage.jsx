import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import { useRef } from "react";
import Card from "../components/Card";

export default function Homepage() {
  const targetRef = useRef(null);

  return (
    <>
      <Navbar />
      <Carousel />
      <Hero targetRef={targetRef}/>
      <div ref={targetRef} className="w-full h-80">
        <h1 className="">Explore Recipes</h1>
        <Card />
      </div>
    </>
  );
}
