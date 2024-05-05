import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import data from "./navItems.json";
import Home from "./Home";

import Header from "./Header";
import MenuOverlay from "./MenuOverlay";

function App() {
  // Changing between menu and submenus
  const [elements, setElements] = useState(data);

  const changeElements = (id) => {
    const selectedItem = elements.find((item) => item.id === id); // Finds the element with the matching id
    const submenuItems = selectedItem.submenu || []; // Get the submenu items
    setElements(submenuItems); //updates the elements array only with the submenu items
  };

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Router>
      <>
        <div className="App w-full bg-gray-800">
          <Header
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
            setElements={setElements}
            data={data}
          />
          <MenuOverlay
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
            elements={elements}
            changeElements={changeElements}
            setElements={setElements}
            data={data}
          />

          {/* <Navbar elements={elements} changeElements={changeElements} /> */}
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
