import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Web Developer",
          "Laravel & React, MERN stack",
          "Blockchain Developer",
          "Ethereum, Solana, Smart contract",
          "Quick and Eager Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
