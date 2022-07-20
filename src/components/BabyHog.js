import { useState, React } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({ name, hobby, eyeColor }) {
  const [weight, setWeight] = useState(4000);
  const [imgHeight, setImgHeight] = useState(200);
  const eyeColorMapper = {
    blue: BlueBaby,
    sun: SunBaby,
    glowing: GlowingBaby
  };
  
  function handleChangeWeight(e) {
    e.target.name === '+' ? incrementWeight() : decrementWeight()
  }

  const incrementWeight = () => {
    setWeight(() => weight + 150)
    setImgHeight(() => imgHeight + 30)
  }

  const decrementWeight = () => {
    setWeight(() => weight - 150)
    setImgHeight(() => imgHeight - 30)
  }

  return (
    <li className="hogbabies">
      <h1>{ name }</h1>
      <h3>Weight: { weight + 'lbs' }</h3>
      <h3>Hobby: { hobby }</h3>
      <h4>Eye Color: { eyeColor }</h4>
      <button name="+" onClick={ handleChangeWeight }>Increase Weight</button>
      <button name="-" onClick={ handleChangeWeight }>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={ eyeColorMapper[eyeColor] }
          style={{ height: `${imgHeight}px`  }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
