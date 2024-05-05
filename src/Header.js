import { Link } from "react-router-dom";

const Header = ({ navbarOpen, setNavbarOpen, setElements, data }) => {
  return (
    <header className="w-full fixed top-0 left-0 p-10 flex z-20">
      <div className="text-white flex-grow z-20">
        <Link
          to="/"
          onClick={() => {
            setNavbarOpen(false);
            setTimeout(() => {
              setElements(data);
            }, 300);
          }}
        >
          <img src="./logo500.png" alt="Logo" className="imgResize" />
        </Link>
      </div>
      <button
        className="flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
        onClick={() => {
          setNavbarOpen(!navbarOpen);
          setTimeout(() => {
            setElements(data);
          }, 300);
        }}
      >
        <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
              navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
              navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
              navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
    </header>
  );
};
export default Header;
