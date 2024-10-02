import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import { useRef } from "react";

export default function Homepage() {
  const targetRef = useRef(null);

  return (
    <>
      <Navbar />
      <Carousel />
      <Hero targetRef={targetRef}/>
      <div ref={targetRef}>
        <h1 className="w-full h-80">Explore Recipes</h1>
      </div>
    </>
  );
}
