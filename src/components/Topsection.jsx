import frogLogo from "../assets/frog.jpeg";
import mail from "../assets/Mail.png";
import linkdin from "../assets/linkedin.png";
export default function Topsection() {
  return (
    <div>
      <header className="header--section">
        <div className="div--image">
          <img
            className="img--headshot"
            src={frogLogo}
            alt="image of an frog with a hoodie"
          />
        </div>

        <div className="div--titles">
          <h1>Wzrdk3lly</h1>
          <h3>Web3 Security Researcher</h3>
          <a href="https://spectrum-close-522.notion.site/Wzrdk3lly-s-Lounge-7749dc97c31940ec96ee8ccbe1466f00">
            wzrdk3lly's blog
          </a>
        </div>
        <div className="div--links">
          <a href="mailto:dkmk1149@gmail.com" className="a--email">
            <img src={mail} />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/miles-n-b6327315b"
            className="a--Linkdin"
          >
            <img src={linkdin} />
            Linkdin
          </a>
        </div>
      </header>
    </div>
  );
}
