import { useEffect, useState } from "react";
import { itunesClient } from "../../clients";
import { PodcastList } from "../../typings/PodcastList";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [podcast, setPodcast] = useState<PodcastList>();

  useEffect(() => {
    if (podcast !== undefined) return;
    setLoading(true);

    itunesClient.getAllPodcast().then((result) => {
      setPodcast(result);
      setLoading(false);
    });
  }, []);

  return (
    <section>
      {loading ? (
        <></>
      ) : (
        <ul>
          {podcast &&
            podcast.feed.entry.map((element, index) => {
              return (
                <a href="#">
                  <li key={index}>
                    <img
                      src={element["im:image"][0].label}
                      alt={`${element.id.attributes["im:id"]}-image`}
                    />
                    <p>{element["im:name"].label}</p>
                    <p>{element["im:artist"].label}</p>
                  </li>
                </a>
              );
            })}
        </ul>
      )}
    </section>
  );
};

export default Home;
