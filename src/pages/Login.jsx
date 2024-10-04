import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/request";
import { toast } from "react-toastify";
import error from "../utils/error";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    try {
      const {data} = await axios.post("/login/google", null, {
        headers:{
          google_token: response.credential
        }
      })
      console.log(data);
      localStorage.setItem("access_token",data.access_token);
      nav("/");
    } catch (err){
      console.log(err);
      error(err.response?.data?.message || err.message);
    }
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await axios({
        method:"post",
        url:"/login",
        data:{
            email:email,
            password:password              
        }
    })
    localStorage.setItem("access_token",response.data.access_token);
    nav("/");
    } catch (err){
      console.log(err.response);
      error(err.response?.data?.message || err.message);
    }
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "588780672089-26pcbof9lhd13q2hef82qiiai1g4o16r.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" } // customization attributes
    );
    // google.accounts.id.prompt(); // also display the One Tap dialog
  }, []);

  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-full lg:max-w-3xl w-full"> {/* Added full width */}
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Login to Sizzle &amp; Stir 🍳
              </h1>
              <p className="mt-4 leading-relaxed text-gray-500">
                Login to browse a generous amount of your favorite dishes!
              </p>
              <form className="mt-8 flex flex-col w-full space-y-4" onSubmit={handleSubmit}>
                <label className="input input-bordered input-error flex items-center gap-2">
                  Email
                  <input
                    type="email"
                    className="grow w-full px-4 py-2 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label className="input input-bordered input-error flex items-center gap-2">
                  Password
                  <input
                    type="password"
                    className="grow w-full px-4 py-2 rounded-md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4 mt-4">
                  <button className="btn btn-error inline-block shrink-0 rounded-md border px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-error focus:outline-none focus:ring active:text-error w-full sm:w-auto">
                    Login
                  </button>
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Don't have an account?
                    <Link
                      to="/register"
                      className="text-gray-700 underline hover:text-error"
                    >
                      Register
                    </Link>
                    .
                  </p>
                </div>
              </form>
              <hr className="my-6" />
              <div className="flex justify-center mt-4">
                <div id="buttonDiv"></div>
              </div>
            </div>
          </main>

          {/* Right Side Image */}
          <aside className="relative block h-64 lg:h-full lg:col-span-5 xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1675062521113-acbcc5608d11?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>
        </div>
      </section>
    </>
  );
}
