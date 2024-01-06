import { useDetailsData } from "../../Helpers/useDetails";
import EpisodieDetail from "../../components/EpisodieDetail/EpisodieDetail";
import OwnerInfo from "../../components/OwnerInfo/OwnerInfo";
import "./Detail.scss";

const List: React.FC = () => {
  const { detail } = useDetailsData();

  return (
    <section className="podcast_episodies">
      <OwnerInfo author={detail?.results?.[0]} />
      <div className="podcast_episodies_list">
        <EpisodieDetail detail={detail} />
      </div>
    </section>
  );
};

export default List;
