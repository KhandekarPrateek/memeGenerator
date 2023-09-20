import React from "react";
import memesData from "../memesdata";
import { useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState("");
  function handleClick() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const randomMeme = memesArray[randomNumber].url;
    setMeme(randomMeme);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="upper field" className="form--input" />
        <input type="text" placeholder="lower field" className="form--input" />
        <button className="form--button" onClick={handleClick}>
          {" "}
          Insert a new meme
        </button>
        <img className="form--image" src={meme} alt="memes to be pulled" />
      </div>
    </main>
  );
};
export default Meme;
