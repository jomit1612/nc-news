import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <section className="Nav">
        <section className="topics">
          <Link to="/" className="link">
            <img
              src="https://img.icons8.com/dusk/900/undefined/home--v1.png"
              alt="home button"
              className="linkimg"
            ></img>
          </Link>

          <Link to="/cooking" className="link">
            <img
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/undefined/external-cooking-stay-at-home-flaticons-flat-flat-icons-3.png"
              alt="Link to cooking articles"
            />
          </Link>
          <Link to="/coding" className="link">
            <img
              src="https://img.icons8.com/external-prettycons-solid-prettycons/60/undefined/external-coding-education-prettycons-solid-prettycons.png"
              alt="link to coding articles"
            />
          </Link>
          <Link to="/football" className="link">
            <img
              src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/undefined/external-football-germany-icongeek26-glyph-icongeek26.png"
              alt="link to football articles"
            />
          </Link>
          <Link to="/users" className="link">
            <img
              src="https://img.icons8.com/doodle/48/undefined/group.png"
              alt="users link"
            />
          </Link>
        </section>
        <section></section>
      </section>
    </>
  );
};

export default Nav;
