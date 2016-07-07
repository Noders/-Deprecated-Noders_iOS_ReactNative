import config from '../config/config';

export const fetchMediumPosts = () => {

  console.log(config);
  debugger;
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${config.medium.token}`);
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Accept-Charset', 'utf-8');

  const myInit = {
    method: 'GET',
    headers: myHeaders,
  };



  return fetch('https://api.medium.com/v1/me', myInit)
    .then((response) => response.json())
    .then((data) => {
      return fetch(`https://api.medium.com/v1/users/${data.data.id}/publications`, myInit)
    })
    .then((response) => response.json())
}
