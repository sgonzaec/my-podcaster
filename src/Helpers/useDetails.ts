import { useEffect, useState } from "react";
import { itunesClient } from "../clients";
import { DetailList } from "../typings/DetailList";
import { useParams } from "react-router-dom";

interface UseDetailsDataResult {
  loading: boolean;
  detail?: DetailList;
}

export const useDetailsData = (): UseDetailsDataResult => {
  const [loading, setLoading] = useState(false);
  const { id: routeId } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<DetailList | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    if (routeId === undefined) return;

    try {
      itunesClient.getPodcastList(routeId).then((result) => {
        setDetail(result);

        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  }, [routeId]);

  return { loading, detail };
};
