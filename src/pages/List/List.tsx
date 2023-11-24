import { useDetailsData } from "../../Helpers/useDetails";
import EpisodiesList from "../../components/EpisodiesList/EpisodiesList";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import OwnerInfo from "../../components/OwnerInfo/OwnerInfo";
import "./List.scss";

const List: React.FC = () => {
  const { loading, detail } = useDetailsData();

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <section className="podcast_episodies">
          <OwnerInfo author={detail?.results?.[0]} />
          <div className="podcast_episodies_list">
            <p className="podcast_episodies_list_count">
              Episodios: {detail?.resultCount}
            </p>
            <EpisodiesList episodies={detail?.results} />
          </div>
        </section>
      )}
    </>
  );
};

export default List;
