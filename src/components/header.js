import { Link } from "react-router-dom";
import profileImage from "../assets/userProfile.jpeg";

const twitter = "https://twitter.com/@psalmwell";

function Header() {
  return (
    <>
      <header>
        <div className="profile">
          <Link to="/">
            <img src={profileImage} alt="profile" id="profile_img" />
          </Link>
          <a href={twitter} id="twitter">
            @psalmwell
          </a>
          <h1 className="hidden" id="slack">
            stephen samuel
          </h1>
        </div>
      </header>
    </>
  );
}

export default Header;
