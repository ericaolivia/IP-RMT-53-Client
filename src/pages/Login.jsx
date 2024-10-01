import { Link } from "react-router-dom"

export default function Login(){
    return (
        <>
        <section className="bg-white">
          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
              <div className="max-w-xl lg:max-w-3xl">
                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Login to Sizzle &amp; Stir 🍳
                </h1>
                <p className="mt-4 leading-relaxed text-gray-500">
                  Login to browse generous amount of your possibly favorite dishes!
                </p>
                <form className="mt-8 flex flex-col w-full">
                  <label className="input input-bordered input-error flex items-center gap-2 my-1">
                    Email
                    <input type="text" className="grow" />
                  </label>
                  <label className="input input-bordered input-error flex items-center gap-2 my-1">
                    Password
                    <input type="text" className="grow" />
                  </label>
                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4 mt-4">
                    <button className="btn btn-error inline-block shrink-0 rounded-md borde px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-error focus:outline-none focus:ring active:text-error">
                      Login
                    </button>
                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Don't have an account? 
                      <Link to="/register" className="text-gray-700 underline hover:text-error">
                        Register
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              </div>
            </main>
            <aside className="relative block h-16 lg:order-first lg:col-span-5 lg:h-full xl:col-span-6">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1675062521113-acbcc5608d11?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </aside>
          </div>
        </section>
      </>
    )
}