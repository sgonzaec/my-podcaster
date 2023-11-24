const baseURL = 'https://itunes.apple.com';

const itunesClient = {
  getAllPodcast: () => {
    const options = {
        limit: 100,
        genre: 1310
    }
    return fetch(
      `${baseURL}/us/rss/toppodcasts/limit=${options.limit}/genre=${options.genre}/json`,
      { method: 'GET' },
    ).then((res) => {
        if (res.status >= 200 && res.status < 300) {
            return res.json()
        } else {
            return "Error consultando listado principal";
        }
    });
  },
  getPodcastList: (id: string) => {
    const options = {
      media: 'podcast',
        entity: 'podcastEpisode',
        limit: '20'
    }
    return fetch(
      `${baseURL}/lookup?id=${id}&media=${options.media}&entity=${options.entity}&limit=${options.limit}`,
      { method: 'GET' },
    ).then((res) => {
        if (res.status >= 200 && res.status < 300) {
            return res.json()
        } else {
            return "Error consultando obteniendo información del podcast";
        }
    });
  },
};

export default itunesClient