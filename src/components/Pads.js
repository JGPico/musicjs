import React from "react";
import useSound from 'use-sound';
import bubbleSound from '../sounds/bubbles.mp3';
import claySound from '../sounds/clay.mp3';
import confettiSound from '../sounds/confetti.mp3';
import glimmerSound from '../sounds/glimmer.mp3';
import moonSound from '../sounds/moon.mp3';
import ufoSound from '../sounds/ufo.mp3';

export default function Pads() {

  const [bubble] = useSound(bubbleSound, { volume: 0.5 });
  const [clay] = useSound(claySound, { volume: 0.5 });
  const [confetti] = useSound(confettiSound, { volume: 0.5 });
  const [glimmer] = useSound(glimmerSound, { volume: 0.5 });
  const [moon] = useSound(moonSound, { volume: 0.5 });
  const [ufo] = useSound(ufoSound, { volume: 0.5 });

  return (
    <div className="pads">
      <button onClick={bubble} className="pad1">
      </button>

      <button onClick={clay} className="pad2">
      </button>

      <button onClick={confetti} className="pad3">
      </button>

      <button onClick={glimmer} className="pad4">
      </button>

      <button onClick={moon} className="pad5">
      </button>

      <button onClick={ufo} className="pad6">
      </button>
    </div>
  );
}
