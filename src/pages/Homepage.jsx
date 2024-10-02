import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
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
        // TODO: nanti perlu nyalain abis pasang si authorization
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("access_token")}`
        // }
      });

      const fetchedRecipes = response.data.results;
      const total = response.data.totalResults;
      
       setRecipes(prevRecipes => [...prevRecipes, ...fetchedRecipes]); 
      console.log(recipes,"<<recipes");
       setOffset(newOffset + 10); 
       console.log(newOffset,"<<offset");
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
      <Hero targetRef={targetRef}/>
      <Carousel />
      <div ref={targetRef} className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-10 py-10">
        <h1 className="text-left">Explore Recipes</h1>
        {recipes.length > 0 && recipes.map((r,i)=>{
          return(
            <Card key={i} rounded={false} btnLeft={"See Detail"} btnRight={"Add to Favorites"} title={r.title} imageUrl={r.image} summary={r.summary}/>
          )
        })}
      </div>

      <div className="flex justify-center py-6">
        {canLoadMore && !loading && (
          <button
            className="btn btn-primary"
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
