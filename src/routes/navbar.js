import "../css/nav.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="uls shadow p-2 pb-3 mb-2 rounded">
        <Link className="logo shadow p-3 mb-2 rounded" to="/">
          HOME
        </Link>{" "}
      </div>
      ;
    </>
  );
};

export default Navbar;
