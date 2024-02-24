import React from "react";
import favicon from "../assets/favicon.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center w-28 object-contain" >
          <img src={favicon} alt="Logo" className="h-8" />
            <p className="ml-1 sm:ml-4 text-2xl font-bold">Samurizer</p>
        </div>

        <button type="button" onClick={()=> window.open("https://github.com/lokeshshriwas")} className="black_btn">
            Github
        </button>
      </nav>

      <h1 className="head_text">Summarize Articles with <br className="max-md:hidden"/> <span className="orange_gradient ">OpenAI GPT-4</span></h1>
      <h2 className="desc">Samurizer is your ninja sword, cutting them down to the essentials. Get quick, clear summaries in seconds, saving you time and brainpower. Live smarter, not longer.</h2>
    </header>
  );
};

export default Hero;
