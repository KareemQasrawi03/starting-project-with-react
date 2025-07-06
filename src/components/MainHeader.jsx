import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";
import { Link, useNavigate } from "react-router-dom";

function MainHeader() {
  const navigate = useNavigate();
  return (
    <header className={classes.header}>
      <h1 className={classes.logo} onClick={() => navigate("/")}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link
          className={classes.button}
          to="/create-post"
        >
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
