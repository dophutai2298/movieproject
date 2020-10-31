import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
// import { CenterFocusWeakSharp } from "@material-ui/icons";

class SearchCombobox extends Component {
  render() {
    return (
      <div className="container carousel__reserve">
        <div className="carousel__reserve--phim d-flex">
          <div className="dropdown">
            <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ marginTop: 15 }}
              renderInput={(params) => (
                <TextField {...params} label="Phim" variant="outlined" />
              )}
            />
          </div>
          <div className="dropdown">
            <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ marginTop: 15 }}
              renderInput={(params) => (
                <TextField {...params} label="Rạp" variant="outlined" />
              )}
            />
          </div>
          <div className="dropdown">
            <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ marginTop: 15 }}
              renderInput={(params) => (
                <TextField {...params} label="Ngày xem" variant="outlined" />
              )}
            />
          </div>
          <div className="dropdown">
            <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ marginTop: 15 }}
              renderInput={(params) => (
                <TextField {...params} label="Xuất chiếu" variant="outlined" />
              )}
            />
          </div>

          <div className="dropdown">
            <button className="btn--buy">Mua vé ngay</button>
          </div>
        </div>
      </div>
    );
  }
}
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
];
export default SearchCombobox;
