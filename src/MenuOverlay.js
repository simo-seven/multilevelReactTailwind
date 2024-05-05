import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const MenuOverlay = ({
  navbarOpen,
  setNavbarOpen,
  elements,
  changeElements,
  setElements,
  data,
}) => {
  return (
    <nav
      className={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-32 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <ul className="flex flex-col items-center text-center">
        {elements.map((element) => (
          <li className="nav-li" key={element.id}>
            <Link
              to={element.to}
              className="nav-link"
              onClick={() => {
                if (element.hasSubmenu) {
                  changeElements(element.id);
                } else {
                  setNavbarOpen(false); //closes the navbar
                  setTimeout(() => {
                    setElements(data);
                  }, 300); //resets the elements array to the initial data. Waits 300 ms otherwise the update would be too fast (it can be seen. It's not pleasant)
                }
              }}
            >
              {element.hasSubmenu ? (
                <>
                  {element.name} <FontAwesomeIcon icon={faAngleDoubleRight} />
                </>
              ) : (
                element.name
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuOverlay;
