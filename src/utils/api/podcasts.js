import config from '../config/config';
const xmlJsonify = require('xml-jsonify');

const parseThroughXMS_JSONIFY = (data) => {
  return new Promise((resolve, reject) => {
    xmlJsonify(data, (err,data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.channel.item);
      }
    });
  });
}

const podcastAJAX = (url) => {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
    request.setRequestHeader('Accept', 'text/xml');
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var xml = request.responseText;
        resolve(xml);
      }
    };
  });
}
export const fetchPodcasts = () =>{
  return podcastAJAX(config.podcast.url)
    .then(function(body) {
      return parseThroughXMS_JSONIFY(body)
    }).catch((err)=>{
      console.log(err);
    })
}
