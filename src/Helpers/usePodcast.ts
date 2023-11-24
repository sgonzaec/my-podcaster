import { useEffect, useState } from "react";
import { PodcastList } from "../typings/PodcastList";
import { itunesClient } from "../clients";

const STORAGE_KEY = "podcastData";
const EXPIRATION_KEY = "podcastDataExpiration";

interface UsePodcastDataResult {
  loading: boolean;
  podcast?: PodcastList;
}

export const usePodcastData = (): UsePodcastDataResult => {
  const [loading, setLoading] = useState(false);
  const [podcast, setPodcast] = useState<PodcastList | undefined>(undefined);

  useEffect(() => {
    const fetchDataAndStore = async () => {
      setLoading(true);

      const storedData = localStorage.getItem(STORAGE_KEY);
      const expirationTime = localStorage.getItem(EXPIRATION_KEY);

      if (storedData && expirationTime) {
        const currentTime = new Date().getTime();
        const isExpired = currentTime > parseInt(expirationTime, 10);

        if (!isExpired) {
          setPodcast(JSON.parse(storedData));
          setLoading(false);
          return;
        }
      }

      const result = await itunesClient.getAllPodcast();

      localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
      const expirationTimeMs = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 horas
      localStorage.setItem(EXPIRATION_KEY, expirationTimeMs.toString());

      setPodcast(result);
      setLoading(false);
    };

    fetchDataAndStore();
  }, []);

  return { loading, podcast };
};
