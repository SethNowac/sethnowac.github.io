import "./Card.css";
import { useState } from "react";

/**
 * A component that represents a card containing an image and child elements.
 * @param {Object} props - The props object containing the following properties:
 * @param {Object} props.children - The child elements to render inside the card.
 * @param {string} props.image - The URL of the image to display on the card.
 * @returns {JSX.Element} - A JSX element representing the card.
 */
function Card({ children, image, callback }) {
  const [mouseOverButton, setMouseOverbutton] = useState(false);

  const cardStyle = {
    textAlign: "center",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: "5px",
    maxWidth: "300px",
    maxHeight: "300px",
    backgroundColor:"rgb(131, 131, 131)",
    padding: "5px 5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "calc(10px)"
};

const activeCardStyle = {
  textAlign: "center",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  borderRadius: "5px",
  maxWidth: "310px",
  maxHeight: "310px",
  backgroundColor:"rgb(161, 161, 161)",
  padding: "5px 5px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "calc(10px)"
};

  return (
    <div 
      style={mouseOverButton ? activeCardStyle : cardStyle}
      onMouseEnter={() => setMouseOverbutton(true)}
      onMouseLeave={() => setMouseOverbutton(false)}
      onClick={()=>{callback()}}
    >
      {image && <img className="card-img" src={image} alt=""></img>}
      {children}
    </div>
  );
}

export default Card;