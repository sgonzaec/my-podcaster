import { Entry } from "../typings/PodcastList";

const ownerFunctios = {
  getDescription: (collectionId: number) => {
    const podcastDataString = localStorage.getItem("podcastData");

    if (!podcastDataString) {
      return undefined;
    }

    const podcastData = JSON.parse(podcastDataString);
    if (podcastData && podcastData.feed && podcastData.feed.entry) {
      const podcastEncontrado = podcastData.feed.entry.find(
        (entry: Entry) => entry?.id?.attributes?.["im:id"] === collectionId.toString()
      );
      
      return podcastEncontrado;
    }
    return undefined;
  },
};

export default ownerFunctios;
