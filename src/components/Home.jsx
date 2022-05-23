import React from "react";
import People from "./People";
import "./Style.css";

const Home = () => {
  const [index, indexF] = React.useState(0);
  const { name, job, image, text } = People[index];

  function checkNumber(number) {
    if (number > People.length - 1) {
      return 0;
    }
    if (number < 0) {
      return People.length - 1;
    }
    return number;
  }

  function handleprev(params) {
    indexF((prevState) => {
      let newIndex = prevState - 1;
      return checkNumber(newIndex);
    });
  }
  function handlenext(params) {
    indexF((prevState) => {
      let newIndex = prevState + 1;
      return checkNumber(newIndex);
    });
  }

  function handleRand(params) {
      let n = (Math.ceil(Math.random() * People.length - 1))

      indexF(n)
  }

//   console.log(index);

  return (
    <div className="main">
      <h1>Reviews</h1>
      <div className="line"></div>

      <div className="details">
        <div className="img-div">
          <img src={image} alt="" />
        </div>
        <h3>{name}</h3>
        <p className="title">{job}</p>
        <p>{text}</p>
        <div className="nav">
          <span onClick={handleprev}>{"<"} Prev</span>
          <span onClick={handlenext}>Next {">"}</span>
        </div>

        <button onClick={handleRand}>Surprise me</button>
      </div>
    </div>
  );
};

export default Home;
