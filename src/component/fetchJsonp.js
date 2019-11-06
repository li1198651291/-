import fetchJsonp from 'fetch-jsonp';

function get(url) {
  return new Promise((resolve,reject) => {
    fetchJsonp(url)
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
  })
}
export default get