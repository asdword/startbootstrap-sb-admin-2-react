import React from 'react';
import SideBar from './layouts/SideBar'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// import "./sb-admin-2.min.css"
import "./scss/sb-admin-2.scss"

function App() {
  return (
    <div id="page-top">
      <div id="wrapper">

        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">

          <div id="content">

            <NavBar />

          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
