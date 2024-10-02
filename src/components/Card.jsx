export default function Card() {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
          </h2>
          <p className="line-clamp-2">If a dog chews shoes whose shoes does he choose? BABABABABABABABABABABABABB</p>
          <div className="card-actions justify-start">
            <div className="badge badge-error badge-outline">Fashion</div>
          </div>
          <div className="card-actions justify-center">
          <button className="btn btn-error">Add to Favorites</button>
          </div>
        </div>
      </div>
    </>
  );
}
