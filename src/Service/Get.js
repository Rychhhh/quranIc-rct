import axios from "axios";

const Get = (path) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`https://api.npoint.io/99c279bb173a6e28359c/${path}`).then(
      (result) => {
        resolve(result.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Get;
