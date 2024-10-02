export default function Card({rounded, btnLeft, btnRight, title, imageUrl, summary}) {
    return (
      <div className="cursor-pointer card bg-base-100 w-80 shadow-xl transform transition duration-300 hover:scale-105">
        <figure>
          <img
            src={imageUrl}
            alt="Shoes"
            className={rounded ? "rounded-full size-44 p-2 object-cover" : ""}
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
          <button className="btn btn-warning">{btnLeft}</button>
          <button className="btn btn-error">{btnRight}</button>          
          </div>
        </div>
      </div>
    );
  }
  