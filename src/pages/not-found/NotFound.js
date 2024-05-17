import NotFoundImg from "../../images/NotFound.png";
import "./not-found.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found center">
        <div className="image">
            <img src={NotFoundImg} alt="not-found" />
        </div>
        <div className="text">
          <h3>Page Not Found</h3>
          <p>We suggest you go to homepage while we’re fixing the problem</p>
        </div>
        <div className="button">
          <button onClick={() => navigate("/")}>Back to homepage</button>
        </div>
    </div>
  )
}

export default NotFound