import { Link } from "react-router-dom";

const Navbar = ({ elements, changeElements }) => {

  return (
    <div className="peder">
      {elements.map((element) => (
        <div key={element.id}>
            <Link to={element.to} onClick={element.hasSubmenu ? () => element.hasSubmenu && changeElements(element.id) : null}>
              {element.name}
            </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
