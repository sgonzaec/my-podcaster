import { useEffect, useState } from "react";
import { ResultDetail } from "../../typings/DetailList";

const EpisodieDetail = (detail:any) => {
  const [frameLink, setFrameLink] = useState("")

  useEffect(() => {
    if(!detail) return

    const filteredData = detail.detail?.results?.find((item:ResultDetail) => item?.trackId === parseInt(window.location.pathname.split('/')[4]) )
    const splitURL = filteredData?.trackViewUrl.split('//')
    const newURL = `${splitURL?.[0]}//embed.${splitURL?.[1]}`

    setFrameLink(newURL)
  }, [detail])
  

  return (
    <iframe
      allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
      height="175"
      title="player-podcaster"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={frameLink}
    ></iframe>
  );
};

export default EpisodieDetail;
