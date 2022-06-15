import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <section className="Nav">
        <h3>Available Topics:</h3>
        <section className="topics">
          <Link to="/" className="link"></Link>
          <Link to="/" className="link">
            All items
          </Link>
          <Link to="/cooking" className="link">
            cooking
          </Link>
          <Link to="/coding" className="link">
            coding
          </Link>
          <Link to="/football" className="link">
            football
          </Link>
          <Link to="/users" className="link">
            Users
          </Link>
        </section>
        <section></section>
      </section>
    </>
  );
};

export default Nav;
