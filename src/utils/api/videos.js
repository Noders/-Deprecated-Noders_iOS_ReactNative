import config from '../config/config';
import querystring from 'querystring';
import { parse, format } from 'url';
const Endpoints = {
    videos_endpoint_search: `https://www.googleapis.com/youtube/v3/search?key=${config.youtube.key}&channelId=${config.youtube.channelId}&part=snippet,id&order=date&maxResults=50`,
    videos_endpoint: `https://www.googleapis.com/youtube/v3/videos?part=id,snippet,contentDetails&id={}&key=${config.youtube.key}`
};


export const fetchVideos = () => {
    return fetch(Endpoints.videos_endpoint_search)
        .then((response) => response.json())
        .then((responseData) => {
            var videoArray = "";
            responseData.items.forEach(function(entry) {
                if (entry.id.kind === "youtube#video") {
                    videoArray += entry.id.videoId + ",";
                }
            });
            var adjustedEndpoint = Endpoints.videos_endpoint.replace('{}', videoArray);
            return fetch(adjustedEndpoint)
        })
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
        })
}


export const fetchVideoData = (id) => {
}
