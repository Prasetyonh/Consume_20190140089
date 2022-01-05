import React, { Component } from "react";
import MahasiswaService from "../services/MahasiswaService";

class ViewMahasiswaComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      mahasiswa: {},
    };
  }

  componentDidMount() {
    MahasiswaService.getMahasiswaById(this.state.id).then((res) => {
      this.setState({ mahasiswa: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="card col-md-6 offset-md-3 mt-5">
          <h3 className="text-center">Data Mahasiswa Detail</h3>
          <div className="card-body">
            <div className="row">
              <label>NIM : </label>
              <div>{this.state.mahasiswa.nim}</div>
            </div>
            <div className="row">
              <label>Nama : </label>
              <div>{this.state.mahasiswa.nama}</div>
            </div>
            <div className="row">
              <label>Prodi : </label>
              <div>{this.state.mahasiswa.prodi}</div>
            </div>
            <div className="row">
              <label>Fakultas : </label>
              <div>{this.state.mahasiswa.fakultas}</div>
            </div>
          </div>
          <a href="/data-mahasiswa">
            <button
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "10px",
              }}
              className="btn btn-primary"
            >
              Kembali
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default ViewMahasiswaComponent;
