import React, { Fragment } from "react";

import SurahCard from "../Components/Card_Surah";

// Import Service API
import API from "../Service/index";

// Import withRouter untuk detail ayat setiap surat
import { withRouter } from "react-router-dom";

class Surah extends React.Component {
  state = {
    surah: [],
    search: "",
  };

  // Get
  getSurahAPI = () => {
    API.getNewsSurah().then((result) => {
      this.setState({
        surah: result,
      });
    });
  };

  componentDidMount() {
    this.getSurahAPI();
  }

  // Detail, mengambil berdasarkan nomor setiap surah
  handleDetailAyat = (nomor) => {
    this.props.history.push(`/surah/${nomor}`);
  };

  // onChange for Search
  onChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    // Search function
    const { search, surah } = this.state;
    const filterSurah = surah.filter((surah) => {
      return surah.nama.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <Fragment>
        {/* Search */}
        <div className="container mb-5">
          <form class="col-sm-12">
            <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search" onChange={this.onChange} />
            <div class="text-black text-center">Mencari Manual</div>
          </form>
        </div>

        <div className="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center text-center " style={{ width: "29rem;" }}>
          {filterSurah.map((surah) => {
            return <SurahCard key={surah.nomor} data={surah} Detail={this.handleDetailAyat} />;
          })}
        </div>
        {/* Mapping for Card Surah */}
      </Fragment>
    );
  }
}

export default withRouter(Surah)
