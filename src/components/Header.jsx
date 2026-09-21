import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navigationLinks = [
    { title: "Home", slug: "/" },
    { title: "Characters", slug: "/characters" },
  ];

  if (location.pathname === "/") {
    return null;
  }

  return (
    <header className="header">
      <nav>
        <ul className="listHeader">
          {navigationLinks.map((link) => (
            <li key={link.slug} className="headerItem">
              <Link className="headerLink" to={link.slug}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;