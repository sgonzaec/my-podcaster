// Home.tsx
import React from "react";
import { Entry } from "../../typings/PodcastList";
import Card from "../../components/Card/Card";
import "./Home.scss";
import { usePodcastData } from "../../Helpers/usePodcast";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Home: React.FC = () => {
  const { loading, podcast } = usePodcastData();

  return (
    <section>
      {loading ? (
        <LoadingSpinner />
      ) : (
        podcast && (
          <div className="card-container">
            {podcast.feed.entry.map((element: Entry) => (
              <Card key={element.id.attributes["im:id"]} element={element} />
            ))}
          </div>
        )
      )}
    </section>
  );
};

export default Home;
