import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeDetail } from '../app/slices/recipesSlice';
import { useParams } from 'react-router-dom'; 
import Navbar from "../components/Navbar";
import error from '../utils/error';
import axios from '../utils/request';
import { toast } from 'react-toastify';

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

  const handleSubmit = async () => {
    try{
        // const response = await axios.post(`/favorite/${id}`, {}, {
        //     headers: {
        //       Authorization: `Bearer ${localStorage.getItem('access_token')}` 
        //     }
        //   });

        const response = await axios({
            method:'post',
            url:`/favorite/${id}`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}` 
            }
        })

        toast.success('Recipe added to favorites!'); 
    } catch (err){
        console.log(err);
        error(err.response?.data?.message || err.message);
    }
  }

  return (
    <>
      <Navbar />
      {recipeDetail ? (
        <div className='flex flex-col justify-center items-center py-6 px-20'>
          <img className='size-80 object-cover' src={recipeDetail.imageUrl} alt="" />
          <h1 className='py-4'>{recipeDetail.title}</h1>
          <p>{recipeDetail.description}</p>
          <p>Tags:</p>
          <p>{recipeDetail.tags}</p>
          <button className='btn btn-error' onClick={handleSubmit}>Add to Favorite</button>
        </div>
      ) : (
        <div>No details found</div>
      )}
    </>
  );
}
