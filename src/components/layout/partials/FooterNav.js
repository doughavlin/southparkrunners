import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const clickNavItem = (e) => {
    e.preventDefault();
    const anchorTarget = document.getElementById(e.target.dataset.anchor);
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const classes = classNames("footer-nav", className);
  const menuItems = [
    { id: 0, url: "events", name: "Events" },
    { id: 1, url: "routes", name: "Routes" },
    { id: 2, url: "workouts", name: "Workouts" },
    { id: 3, url: "home", name: "Home" },
  ];
  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        {menuItems.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={`#${item.url}`}
                onClick={clickNavItem}
                data-anchor={item.url}
                aria-label={`Scroll to ${item.name}`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FooterNav;
