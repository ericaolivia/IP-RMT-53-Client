import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeDetail } from '../app/slices/recipesSlice';
import { useParams } from 'react-router-dom'; 
import Navbar from "../components/Navbar";

export default function RecipeDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipeDetail = useSelector((state) => state.recipes.recipeDetail);
  const detailLoading = useSelector((state) => state.recipes.detailLoading);

  useEffect(() => {
    dispatch(fetchRecipeDetail(id));
  }, [dispatch, id]);

  if (detailLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      {recipeDetail ? (
        <div>
          <h1>{recipeDetail.title}</h1>
          <p>{recipeDetail.instructions}</p>
        </div>
      ) : (
        <div>No details found</div>
      )}
    </>
  );
}
