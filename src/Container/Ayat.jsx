import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Ayat = (props) => {
  const [data, setData] = useState([]);

  let id = props.match.params.nomorID;
  useEffect(() => {
    axios.get(`https://api.npoint.io/99c279bb173a6e28359c/surat/${id}`).then((res) => {
      console.log(res); // untuk mengetahui isi console
      setData(res.data);
    });
  });

  return (
    <Fragment>
      <div className="col-md-12 col-sm-12 text-center">
        <Link className="btn btn-danger text-center m-5" to="/">
          Go to Home
        </Link>
      </div>
      {data.length > 0 ? (
        data.map((param) => {
          return (
            <div class="card container mb-5 p-5 text-center rounded-pill bg-dark text-white">
              <div class="card-header fs-1">{param.nomor}</div>
              <div class="card-body">
                <h5 class="card-title fs-2 p-2">{param.ar}</h5>
                <p class="card-text fs-4 pt-2">{param.id}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="col-md-12 col-sm-12 text-center">
          <div class="spinner-border text-danger " role="status">
            <span class="visually-hidden ">Loading...</span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Ayat;
