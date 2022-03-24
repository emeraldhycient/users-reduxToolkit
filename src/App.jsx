import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-50  w-4/12 p-3 shadow ">
        <h1 className="text-slate-800 font-bold text-xl text-center">
          Login users-reduxToolkit 🚪
        </h1>
        <form action="" className="pt-5 text-center">
          <input
            type="email"
            name=""
            id=""
            className="border-b-[.145rem] w-10/12 h-10 mb-3 rounded focus:outline-none"
          />
          <input
            type="password"
            name=""
            id=""
            className="border-b-[.145rem] w-10/12 h-10 mb-3 rounded focus:outline-none"
          />
          <button
            type="submit"
            className="bg-slate-800 w-10/12 h-10 mb-3 rounded text-purple-700	"
          >
            Login
          </button>
          <p>
            <a href="/signup" class="text-decoration-none mt-4">
              Signup
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
