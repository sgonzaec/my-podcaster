const baseURL = 'https://itunes.apple.com';

export default {
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
  }
};
