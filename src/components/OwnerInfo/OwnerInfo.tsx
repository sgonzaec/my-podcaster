import { ResultDetail } from "../../typings/DetailList"
import "./OwnerInfo.scss"

const OwnerInfo = ({author}: {author: ResultDetail}) => {
  return (
    <div className="owner_container">
      <img src={author?.artworkUrl600} alt={`${author?.collectionId}`} />
      <div className="owner_container_block center">
        <p className="owner_container_block_author">{author?.trackName}</p>
        <p>By: {author?.artistName}</p>
      </div>
      <div className="owner_container_block">
        <p><strong>Descipción:</strong> </p>
      </div>
    </div>
  )
}

export default OwnerInfo