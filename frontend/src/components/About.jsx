import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            optio tenetur quae harum aspernatur recusandae maiores, dicta
            officiis dignissimos placeat! Obcaecati necessitatibus quidem,
            explicabo velit qui numquam eum illum soluta aspernatur, iste
            suscipit, consectetur praesentium commodi saepe laboriosam assumenda
            provident perferendis animi voluptatibus laborum est maxime dolores.
            Eius, deleniti magnam!
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
