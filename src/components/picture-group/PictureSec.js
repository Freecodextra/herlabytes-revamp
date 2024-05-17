import React from "react";
import "./picture-sec.css";
import img1 from "../../images/group-tech-2.png";
import img2 from "../../images/group-tech.png";
import img3 from "../../images/lady-pc.png";
import img4 from "../../images/young-lady.png";
import img5 from "../../images/man.png";
import img6 from "../../images/laptop.png";
import img7 from "../../images/code.png";

function PictureSec() {
  const pictureHolder = (index, img) => {
    return (
      <figure className={`gallery__item gallery__item--${index}`}>
        <img src={img} alt={`imagex${index}`} className="gallery__image" />
      </figure>
    );
  };
  return (
    <div className="picture-section">
      {pictureHolder(1, img6)}
      <div>
        {pictureHolder(2, img7)}
        {pictureHolder(3, img3)}
      </div>
      {pictureHolder(4, img2)}
      <div>
        {pictureHolder(5, img1)}
        {pictureHolder(6, img5)}
      </div>
      {pictureHolder(7, img4)}
    </div>
  );
}

export default PictureSec;
