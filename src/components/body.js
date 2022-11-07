import github from "../assets/github.png";
//import I4G from "../assets/I4G.png";
//import zuri from "../assets/Zuri-internship.png";
import slack from "../assets/slack.png";
import { Link } from "react-router-dom";
//import { link } from 'react-router-dom';

function Body() {
  const twitter = "https://twitter.com/@psalmwell";
  const zuriBtn = "https://training.zuri.team/";
  const zuriBooks = "http://books.zuri.team/";
  const pitch = "https://background.zuri.team/";
  const zuriDesign = "https://books.zuri.team/design-rules";

  return (
    <main className="container">
      <div className="buttons">
        <a href={twitter} id="twitter">
          Twitter Link
        </a>
        <a href={zuriBtn} id="btn__zuri">
          Zuri Team
        </a>
        <a href={zuriBooks} id="books">
          Zuri Books
        </a>
        <a href={zuriBooks} id="book__python">
          Python Books
        </a>
        <a href={pitch} id="pitch">
          Background Check for Coders
        </a>
        <a href={zuriDesign} id="book__design">
          Design Books
        </a>
        <Link to="/contact" id="contact">
          contact us
        </Link>
      </div>
      <div className="icons">
        <img src={slack} alt="slack" />
        <img src={github} alt="github" />
      </div>
    </main>
  );
}

export default Body;
