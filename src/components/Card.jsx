import { useNavigate } from "react-router-dom";

export default function Card({rounded, btnLeft, btnRight, id, title, imageUrl, summary}) {
  const nav = useNavigate();

  const handleSeeDetail = () => {
    nav(`/detail/${id}`)
  }

  const handleDelete = async () => {

  }

  const handleAddFavorite = async () => {

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
          <div className="card-actions justify-start">
            <div className="badge badge-error badge-outline">Fashion</div>
          </div>
          <div className="card-actions justify-center">
          <button className="btn btn-warning" onClick={handleSeeDetail}>{btnLeft}</button>
          <button className="btn btn-error" onClick={btnRight == 'Delete' ? handleDelete : handleAddFavorite}>{btnRight}</button>          
          </div>
        </div>
      </div>
    );
  }
  