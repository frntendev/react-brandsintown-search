const searchUrl = "https://rest.bandsintown.com/artists/";
const appId = "sd40fhp3731";

const getArtistInfo = (name, resolve, reject) => {
  let urls = [];
  const appIdQuery = `?app_id=${appId}`;
  const artistInfo = `${searchUrl}${name}${appIdQuery}`;
  const eventData = `${searchUrl}${name}/events${appIdQuery}`;
  urls.push({ key: "artist", url: artistInfo });
  urls.push({ key: "events", url: eventData });
  return getAllUrls(urls, resolve, reject);
};

export default getArtistInfo;

async function getAllUrls(array, resolve, reject) {
  try {
    var data = await Promise.all(
      array.map(item =>
        fetch(item.url)
          .then(response => response.json())
          .then(res => resolve({ [item.key]: res }))
          .catch(err => reject(err))
      )
    );
    return data;
  } catch (error) {
    throw error;
  }
}
