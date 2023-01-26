import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagra.png";
import twitter from "../assets/Twitter.png";
import github from "../assets/GitHub.png";

function Footer() {
  return (
    <footer className="footer--connect">
      <a href="https://twitter.com/wzrdk3lly">
        <img src={twitter} alt="" />
      </a>
      <a href="https://www.facebook.com/">
        <img src={facebook} alt="" />
      </a>
      <a href="https://www.instagram.com/accounts/login/">
        <img src={instagram} alt="" />
      </a>
      <a href="https://github.com/wzrdk3lly">
        <img src={github} alt="" />
      </a>
    </footer>
  );
}

export default Footer;
