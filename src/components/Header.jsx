import links from "../data/header-links";

export default function header() {
  return (
    <header>
      <nav className="container">
        <img className="img-fluid" src="./imgs/dc-logo.png" />
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
