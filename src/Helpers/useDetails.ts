import { useEffect, useState } from "react";
import { itunesClient } from "../clients";
import { DetailList } from "../typings/DetailList";
import { useParams } from "react-router-dom";

interface UseDetailsDataResult {
  detail?: DetailList;
}

export const useDetailsData = (): UseDetailsDataResult => {
  const { id: routeId } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<DetailList | undefined>(undefined);

  useEffect(() => {
    if (routeId === undefined) return;

    console.log(routeId);
    
    itunesClient.getPodcastList(routeId).then((result) => {
      setDetail(result);
    });
  }, [routeId]);

  return { detail };
};
