export default function Carousel() {
  return (
    <>
      <div className="carousel w-full h-[50vh]">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full object-cover"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1661777702966-aed29ab4106b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full object-cover"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1653233797467-1a528819fd4f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full object-cover"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1491185841098-9ce20f966624?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-warning btn-xs hover:bg-error hover:text-black">
          1
        </a>
        <a href="#item2" className="btn btn-warning btn-xs hover:bg-error hover:text-black">
          2
        </a>
        <a href="#item3" className="btn btn-warning btn-xs hover:bg-error hover:text-black">
          3
        </a>
        <a href="#item4" className="btn btn-warning btn-xs hover:bg-error hover:text-black">
          4
        </a>
      </div>
    </>
  );
}
