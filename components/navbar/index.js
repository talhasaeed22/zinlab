import styles from "./navbar.module.css";
import { useState } from "react";

import Image from "next/image";
const Navbar = () => {
  const navitems = [
    "Stock Video",
    "Video Templates",
    "Music",
    "Sound Effects",
    "Graphic Templates",
    "Graphics",
    "Presentation Templates",
    "Photos",
    "Fonts",
    "Add-ons",
    "More",
  ];
  const dropdownContent = [
    ["Stock Footage", "Motion Graphics", "All Stock Video"],
    [],
    ["Royality Free Music", "logos & Idents", "All Music"],
    [],
    [],
    ["Dropdown Item 1", "Dropdown Item 2"],
    [],
    ["Dropdown Item 1", "Dropdown Item 2"],
    ["Dropdown Item 1", "Dropdown Item 2"],
    [],
    [],
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleNavitemHover = (navitem) => {
    setActiveDropdown(navitem);
  };

  const handleNavitemLeave = () => {
    setActiveDropdown(null);
  };
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_uppper}>
        <div className={styles.navbarLogo}>
          <Image
            className={styles.navbarLogoImage}
            width={80}
            height={50}
            src="vercel.svg"
          />
        </div>
        <div className={styles.navSearchBar}>
          <input
            placeholder="Search for Movies, TV Shows, Themes & Cast"
            type="text"
            name="search"
            id="search"
          />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <div className={styles.navbarButton}>
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </div>

      <div className={styles.navbar_lower}>
        {navitems.map((nav, index) => {
          return (
            <div
              key={index}
              className={styles.navItemWrapper}
              onMouseEnter={() => handleNavitemHover(nav)}
              onMouseLeave={handleNavitemLeave}
            >
              <span>{nav}</span>
              {activeDropdown === nav && dropdownContent[index].length > 0 && (
                <div className={styles.dropdown}>
                  {dropdownContent[index].map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
