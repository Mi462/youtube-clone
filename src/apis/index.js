import axios from "axios";

const KEY = 'AIzaSyAZNDUvh8q-uv59DkDg3HJJM56ENvRHTBg';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params:{
      part: 'snippet',
      maxResults: 40, 
      key: KEY,
      regionCode: 'JP',
      type: 'video',
      chart: 'mostPopular',
    }
  })
}