import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="tabs">
      <ul>
        <li><Link to="/html" className="category-btn">HTML</Link></li>
        <li><Link to="/css" className="category-btn">CSS</Link></li>
        <li><Link to="/javascript" className="category-btn">JavaScript</Link></li>
        <li><Link to="/react" className="category-btn">React</Link></li>
        <li><Link to="/headless-cms" className="category-btn">Sanity</Link></li>
      </ul>
    </nav>
  );
}
