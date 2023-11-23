import { Link } from "react-router-dom";
import { Entry } from "../../typings/PodcastList";
import "./Card.scss";

interface CardProps {
  element: Entry;
}

const Card: React.FC<CardProps> = ({ element }) => {
  return (
    <div className="card">
      <Link to={`/podcast/${element.id.attributes["im:id"]}`}>
        <img
          src={element["im:image"][0].label}
          alt={`${element.id.attributes["im:id"]}`}
        />
        <div className="card-content">
          <p className="card-content-name">{element["im:name"].label}</p>
          <p className="card-content-author">
            Author: {element["im:artist"].label}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
