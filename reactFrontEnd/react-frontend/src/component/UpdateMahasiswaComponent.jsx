import React, { Component } from "react";
import MahasiswaService from "../services/MahasiswaService";

class UpdateMahasiswaComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      nim: "",
      nama: "",
      prodi: "",
      fakultas: "",
    };

    this.changeNimHandler = this.changeNimHandler.bind(this);
    this.changeNamaHandler = this.changeNamaHandler.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  updateData = (e) => {
    e.preventDefault();
    let mahasiswa = {
      nim: this.state.nim,
      nama: this.state.nama,
      prodi: this.state.prodi,
      fakultas: this.state.fakultas,
    };
    console.log("mahasiswa => " + JSON.stringify(mahasiswa));
    MahasiswaService.updateMahasiswa(mahasiswa, this.state.id).then((res) => {
      this.props.history.push("/data-mahasiswa");
    });
  };

  componentDidMount() {
    MahasiswaService.getMahasiswaById(this.state.id).then((res) => {
      let mahasiswa = res.data;
      this.setState({
        nim: mahasiswa.nim,
        nama: mahasiswa.nama,
        prodi: mahasiswa.prodi,
        fakultas: mahasiswa.fakultas,
      });
    });
  }

  changeNimHandler = (event) => {
    this.setState({ nim: event.target.value });
  };

  changeNamaHandler = (event) => {
    this.setState({ nama: event.target.value });
  };

  changeProdiHandler = (event) => {
    this.setState({ prodi: event.target.value });
  };

  changeFakultasHandler = (event) => {
    this.setState({ fakultas: event.target.value });
  };

  cancel() {
    this.props.history.push("/data-mahasiswa");
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
              <h3 className="text-center">Edit Data</h3>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label htmlFor=""></label>
                    <input
                      placeholder="NIM"
                      name="nim"
                      className="form-control"
                      value={this.state.nim}
                      onChange={this.changeNimHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor=""></label>
                    <input
                      placeholder="Nama"
                      name="nama"
                      className="form-control"
                      value={this.state.nama}
                      onChange={this.changeNamaHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor=""></label>
                    <input
                      placeholder="Prodi"
                      name="prodi"
                      className="form-control"
                      value={this.state.prodi}
                      onChange={this.changeProdiHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor=""></label>
                    <input
                      placeholder="Fakultas"
                      name="fakultas"
                      className="form-control"
                      value={this.state.fakultas}
                      onChange={this.changeFakultasHandler}
                    />
                  </div>
                  <br />

                  <button className="btn btn-success" onClick={this.updateData}>
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateMahasiswaComponent;
