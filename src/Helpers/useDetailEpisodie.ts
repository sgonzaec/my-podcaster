import { useEffect, useState } from "react";

interface UseEpisodieDataResult {
  loading: boolean;
  episodie?: any;
  ownerInfo?: any
}

export const useDetailsEpisodie = (): UseEpisodieDataResult => {
  const [loading, setLoading] = useState(false);
  const [ownerInfo, setOwnerInfo] = useState();
  const [episodie, setEpisodie] = useState<any | undefined>(undefined);

  useEffect(() => {

  }, []);

  return { loading, episodie, ownerInfo };
};
