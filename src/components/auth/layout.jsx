import React, { useEffect } from "react";

function Layout(props) {
  useEffect(() => {
    document.title = props.title;
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-50  w-4/12 p-3 shadow ">
        <h1 className="text-slate-800 font-bold text-xl text-center">
          {props.title}
        </h1>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
