import React from "react";

function Header() {
  return (
    <div className="bg-[#044e83] w-full h-20 sticky top-0 ">
      <div className="flex justify-between  ml-20 mr-12">
        <div>
          <a href="/" className="m-5">
            <img
              src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png"
              alt="logo"
              width="90"
            />
          </a>
        </div>
        <div>
          <h1 className="mt-7 text_shadow text-2xl font-extrabold flex justify-center items-center  text-[#b9d8f3]">
            Tuition Free Education Program on Latest Technologies
          </h1>
        </div>
        <ul className="mt-8 flex gap-8 text_shadow text-white mr-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Apply</a>
          </li>
          <li>
            <a href="/">Jobs</a>
          </li>
          <li>
            <a href="/">Result</a>
          </li>
          <li>
            <a href="/">Career</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
