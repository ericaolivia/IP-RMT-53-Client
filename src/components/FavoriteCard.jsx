export default function FavoriteCard() {
  return (
    <>
      <div className="card bg-base-100 w-80 shadow-xl transform transition duration-300 hover:scale-105">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-full size-60 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-warning">See Detail</button>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
