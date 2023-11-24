import ownerFunctios from "../../Functions/ownerFunctions";
import { ResultDetail } from "../../typings/DetailList";
import "./OwnerInfo.scss";

const OwnerInfo = ({ author }: { author: ResultDetail }) => {
  return (
    <div className="owner_container">
      <img src={author?.artworkUrl600} alt={`${author?.collectionId}`} />
      <div className="owner_container_block center">
        <p className="owner_container_block_author">{author?.trackName}</p>
        <p>By: {author?.artistName}</p>
      </div>
      <div className="owner_container_block">
        {author && author?.collectionId && (
          <p className="owner_container_block_description">
            <strong>Descipción:{" "}</strong>
            {ownerFunctios.getDescription(author?.collectionId)}
          </p>
        )}
      </div>
    </div>
  );
};

export default OwnerInfo;
