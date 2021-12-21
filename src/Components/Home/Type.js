import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="type">
      <Typewriter
        options={{
          strings: [
            "Developer",
            "Student Software Engineer",
            "MERN Stack Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
