import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListMahasiswaComponent from "./component/ListMahasiswaComponent";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import CreateMahasiswaComponent from "./component/CreateMahasiswaComponent";
import UpdateMahasiswaComponent from "./component/UpdateMahasiswaComponent";
import ViewMahasiswaComponent from "./component/ViewMahasiswaComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListMahasiswaComponent}></Route>
            <Route
              path="/data-mahasiswa"
              component={ListMahasiswaComponent}
            ></Route>
            <Route
              path="/tambah-mahasiswa"
              component={CreateMahasiswaComponent}
            ></Route>
            <Route
              path="/update-mahasiswa/:id"
              component={UpdateMahasiswaComponent}
            ></Route>
            <Route
              path="/view-mahasiswa/:id"
              component={ViewMahasiswaComponent}
            ></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
