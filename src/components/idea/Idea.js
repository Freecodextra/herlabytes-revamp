import React from "react";
import "./idea.css";
import squad from "../../images/sqad.png"
import adaptive from "../../images/adaptive.png"

function Idea() {
  return (
    <div className="idea">
      <div className="idea-head">
        <h4>From ideation to designing to a product ready for the market.</h4>
        <p>
          We've designed our process to enhance product-market fit by assembling
          a diverse team to work with you and provide immensely lucrative
          solutions.
        </p>
      </div>
      <div className="idea-body">
        <div className="idea-card squad">
          <div className="first">
            <img src={squad} alt="squad" />
            <span>Committed squads</span>
          </div>
          <div className="second">
            <p>
              Our standard approach is to form teams of specialists in product,
              design, and engineering who work exclusively on your project.
              However, we tailor the team composition to fit the specific
              requirements of each task."
            </p>
          </div>
        </div>
        <div className="idea-card adaptive">
          <div className="first">
            <img src={adaptive} alt="adaptive" />
            <span>Adaptive development</span>
          </div>
          <div className="second">
            <p>
              Our standard approach is to form teams of specialists in product,
              design, and engineering who work exclusively on your project.
              However, we tailor the team composition to fit the specific
              requirements of each task."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Idea;
