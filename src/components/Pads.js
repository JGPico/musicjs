import React from "react";

export default function Pads() {
  //   window.addEventListener("load", () => {
  //     const sounds = document.querySelectorAll(".sound");
  //     const pads = document.querySelectorAll(".pads div");

  //     // Starting sounds
  //     pads.forEach((pad, index) => {
  //       pad.addEventListener("click", function () {});
  //       sounds[index].play();
  //     });
  //   });

  const handleClick = (event) => {
    event.preventDefault();
    console.log("button clicked");
  };

  return (
    <div className="pads">
      <button onClick={handleClick} className="pad1">
        <audio className="sound" src="../sounds/bubbles.mp3"></audio>
      </button>

      <button className="pad2">
        <audio className="sound" src="../sounds/clay.mp3"></audio>
      </button>

      <button className="pad3">
        <audio className="sound" src="../sounds/confetti.mp3"></audio>
      </button>

      <button className="pad4">
        <audio className="sound" src="../sounds/glimmer.mp3"></audio>
      </button>

      <button className="pad5">
        <audio className="sound" src="../sounds/moon.mp3"></audio>
      </button>

      <button className="pad6">
        <audio className="sound" src="../sounds/ufo.mp3"></audio>
      </button>
    </div>
  );
}
