import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Card from "../components/Card";
import axios from "../utils/request";
import { useState, useEffect, useRef } from "react";

export default function Homepage() {
  const targetRef = useRef(null);
  const [recipes, setRecipes] = useState([]);
  const [offset, setOffset] = useState(0); 
  const [totalResults, setTotalResults] = useState(0); 
  const [loading, setLoading] = useState(false); 
  const [canLoadMore, setCanLoadMore] = useState(true); 

  async function fetchRecipes(newOffset = 0){
    try{
      setLoading(true); 
      const response = await axios({
        method: 'get',
        url: '/',
        params: {
          offset: newOffset, 
          number: 10, 
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
      });

      const fetchedRecipes = response.data.results;
      const total = response.data.totalResults;
      
       setRecipes(prevRecipes => [...prevRecipes, ...fetchedRecipes]); 
       setOffset(newOffset + 10); 
       setTotalResults(total);

      if (newOffset + 10 >= total) {
        setCanLoadMore(false);
      }
    } catch (err){
      console.log(err);
    } finally {
      setLoading(false); 
    }
  }

  useEffect(()=>{
    fetchRecipes(0);
  },[])

  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero targetRef={targetRef} />
      <Carousel />
      <div ref={targetRef} className="w-full px-6 md:px-10 py-6 md:py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-left mb-4">Explore Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.length > 0 && recipes.map((r, i) => (
            <Card
            className="flex justify-center items-center"
              key={i}
              id={r.id}
              rounded={false}
              btnLeft={"See Detail"}
              btnRight={"Add to Favorites"}
              title={r.title}
              imageUrl={r.image}
              summary={r.summary}
            />
          ))}
        </div>
      </div>
  
      <div className="flex justify-center py-6">
        {canLoadMore && !loading && (
          <button
            className="btn btn-primary px-6 py-2 text-sm md:text-base w-full md:w-auto"
            onClick={() => fetchRecipes(offset)}
          >
            Show More
          </button>
        )}
        {loading && <p>Loading...</p>}
      </div>
  
      {/* <Footer /> */}
    </div>
  );  
}
