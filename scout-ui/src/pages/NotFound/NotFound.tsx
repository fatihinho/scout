import "./NotFound.css";

import image from "../../assets/404NotFound.jpg";

export default function NotFound() {
  return (
    <div className="container">
      <img className="image" alt="404-not-found" src={image}/>
    </div>
  )
}