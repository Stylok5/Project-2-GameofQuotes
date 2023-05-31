import { Link } from "react-router-dom";

const Header = () => {
  const navigationLinks = [
    { title: "Home", slug: "/" },
    { title: "Characters", slug: "/characters" },
    { title: "Register", slug: "/" },
    { title: "Login", slug: "/" },
  ];

  return (
    <header className="header">
      <nav>
        <ul className="listHeader">
          {navigationLinks.map((link, idx) => (
            <Link key={idx} to={link.slug}>
              <li className="headerLink">{link.title}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
