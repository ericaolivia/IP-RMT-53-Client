import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1707056503922-91c9ebaf0774?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Sizzle &amp; Stir 🍳
              </h1>
              <p className="mt-4 leading-relaxed text-gray-500">
                Join us to uncover blissful taste that is suitable for you!
              </p>
              <form className="mt-8 flex flex-col w-full">
                <label className="input input-bordered input-error flex items-center gap-2 my-1">
                  Name
                  <input type="text" className="grow" />
                </label>
                <label className="input input-bordered input-error flex items-center gap-2 my-1">
                  Email
                  <input type="text" className="grow" />
                </label>
                <label className="input input-bordered input-error flex items-center gap-2 my-1">
                  Password
                  <input type="text" className="grow" />
                </label>
                <div className="col-span-6 m-4">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our terms and
                    conditions and privacy policy.
                  </p>
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="btn btn-error inline-block shrink-0 rounded-md borde px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-error focus:outline-none focus:ring active:text-error">
                    Create an account
                  </button>
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account? 
                    <Link to="/login" className="text-gray-700 underline hover:text-error">
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
