import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../utils/request";
import error from "../utils/error";

export default function Card({rounded, btnLeft, btnRight, id, title, imageUrl, summary, fetchFavorites}) {
  const nav = useNavigate();

  const handleSeeDetail = () => {
    nav(`/detail/${id}`)
  }

  const handleDelete = async () => {
    try {
      // const response = await axios.delete(`/api/favorite/${id}`, {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem('access_token')}`, // Include token for authorization
      //   },
      // });
      console.log(id,"recipeId");
      const response = await axios({
        method: 'delete',
        url:`/favorite/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`, 
        },
      })

      toast.success('Successfully deleted from favorites');
      fetchFavorites();
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete from favorites');
    }
  };

  const handleAddFavorite = async () => {
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
      <div className="cursor-pointer card bg-base-100 h-98 w-80 shadow-xl transform transition duration-300 hover:scale-105">
        <figure>
          <img
            src={imageUrl}
            alt="Shoes"
            className={rounded ? "rounded-full size-40 p-2 object-cover" : ""}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="line-clamp-2">
            {summary}
          </p>
          {/* <div className="card-actions justify-start">
            <div className="badge badge-error badge-outline">Fashion</div>
          </div> */}
          <div className="card-actions justify-center">
          <button className="btn btn-warning" onClick={handleSeeDetail}>{btnLeft}</button>
          <button className="btn btn-error" onClick={btnRight == 'Delete' ? handleDelete : handleAddFavorite}>{btnRight}</button>          
          </div>
        </div>
      </div>
    );
  }
  