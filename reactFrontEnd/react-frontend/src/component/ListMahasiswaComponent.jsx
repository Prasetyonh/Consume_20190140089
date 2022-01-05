import React, { Component } from "react";
import MahasiswaService from "../services/MahasiswaService";

class ListMahasiswaComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mahasiswa: [],
    };
    this.tambahMahasiswa = this.tambahMahasiswa.bind(this);
    this.editMahasiswa = this.editMahasiswa.bind(this);
    this.deleteMahasiswa = this.deleteMahasiswa.bind(this);
  }

  componentDidMount() {
    MahasiswaService.getMahasiswa().then((res) => {
      this.setState({ mahasiswa: res.data });
    });
  }

  tambahMahasiswa() {
    this.props.history.push("/tambah-mahasiswa/");
  }
  editMahasiswa(id) {
    this.props.history.push(`/update-mahasiswa/${id}`);
  }

  deleteMahasiswa(id) {
    MahasiswaService.deleteMahasiswa(id).then((res) => {
      this.setState({
        mahasiswa: this.state.mahasiswa.filter(
          (mahasiswa) => mahasiswa.id !== id
        ),
      });
    });
  }

  viewMahasiswa(id) {
    this.props.history.push(`/view-mahasiswa/${id}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">List Mahasiswa</h2>
        <button className="btn btn-primary mb-2" onClick={this.tambahMahasiswa}>
          Tambah Data
        </button>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>NIM</th>
                <th>Nama</th>
                <th>Prodi</th>
                <th>Fakultas</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.mahasiswa.map((mhs) => (
                <tr key={mhs.id}>
                  <td>{mhs.nim}</td>
                  <td>{mhs.nama}</td>
                  <td>{mhs.prodi}</td>
                  <td>{mhs.fakultas}</td>
                  <td className="text-center">
                    <button
                      onClick={() => this.editMahasiswa(mhs.id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteMahasiswa(mhs.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewMahasiswa(mhs.id)}
                      className="btn btn-info"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListMahasiswaComponent;
