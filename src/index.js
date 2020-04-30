import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App(props) {
  const user = {
    name: "Chris on Code",
    location: "Las Vegas",
    foodType: "Everything",
    age: 28,
    likes: "Coding into the wee hours of the morning",
    twitterUsername: "chrisoncode",
    avatar:
      "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
  };
  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">Name : {user.name}</div>
      <div className="user-deets">Location : {user.location}</div>
      <div className="user-deets">FoodType : {user.foodType}</div>
      <div className="user-deets">Age : {user.age}</div>
      <div className="user-deets">Likes : {user.likes}</div>
      <div className="user-deets">TwitterUserName : {user.twitterUsername}</div>
      <img src={user.avatar} />

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
