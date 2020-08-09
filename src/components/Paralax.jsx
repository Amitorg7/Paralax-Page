import React, { Fragment, useEffect } from "react";

const Paralax = () => {
  useEffect(() => {
    let bg = document.getElementById("bg");
    let moon = document.getElementById("moon");
    let mountain = document.getElementById("mountain");
    let road = document.getElementById("road");
    let text = document.getElementById("text");

    window.addEventListener("scroll", () => {
      var value = window.scrollY;
      bg.style.top = value * 0.5 + "px";
      moon.style.left = -value * 0.5 + "px";
      mountain.style.top = -value * 0.15 + "px";
      road.style.top = value * 0.15 + "px";
      text.style.top = value * 1 + "px";
    });
  });

  return (
    <Fragment>
      <section id="main">
        <img className="img-fluid" src="/img/bg.jpg" id="bg" />
        <img className="img-fluid" src="/img/moon.png" id="moon" />
        <img className="img-fluid" src="/img/mountain.png" id="mountain" />
        <img className="img-fluid" src="/img/road.png" id="road" />
        <h2 id="text">Moon Light </h2>
      </section>
    </Fragment>
  );
};
export default Paralax;
