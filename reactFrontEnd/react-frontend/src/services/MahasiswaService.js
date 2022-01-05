import axios from "axios";

const MAHASISWA_API_URL = "http://localhost:8080/data/mahasiswa";
class MahasiswaService {
  getMahasiswa() {
    return axios.get(MAHASISWA_API_URL);
  }

  createMahasiswa(mahasiswa) {
    return axios.post(MAHASISWA_API_URL, mahasiswa);
  }

  getMahasiswaById(mahasiswaId) {
    return axios.get(MAHASISWA_API_URL + "/" + mahasiswaId);
  }

  updateMahasiswa(mahasiswa, mahasiswaId) {
    return axios.put(MAHASISWA_API_URL + "/" + mahasiswaId, mahasiswa);
  }

  deleteMahasiswa(mahasiswaId) {
    return axios.delete(MAHASISWA_API_URL + "/" + mahasiswaId);
  }
}

export default new MahasiswaService();
