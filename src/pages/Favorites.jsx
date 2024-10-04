import { useEffect, useState } from "react";
import axios from "../utils/request";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        // const response = await axios.get(`/favorite`, {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem('access_token')}`
        //   }
        // });
        const response = await axios({
            method: 'get',
            url: `/favorite`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        console.log(response.data);
        setFavorites(response.data); 
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load favorites');
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />
      <div className="w-full px-10">
        <h1 className="text-left py-6">My Favorites</h1>
        <div className="max-w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full my-10">
          {favorites.length > 0 ? (
            favorites.map((favorite, index) => (
              <Card
                key={index}
                id={favorite.RecipeId}
                title={favorite.Recipe.title}
                imageUrl={favorite.Recipe.imageUrl}
                summary={favorite.Recipe.description}
                rounded={true}
                btnLeft={"See Detail"}
                btnRight={"Delete"}
              />
            ))
          ) : (
            <p>No favorite recipes found.</p>
          )}
        </div>
      </div>
    </>
  );
}
