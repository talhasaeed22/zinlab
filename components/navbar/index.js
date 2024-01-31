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
    [
      "After Effect",
      "Premiere Pro",
      "Apple Motion",
      "Final Cut Pro",
      "DaVinci Resolve",
      "All Video Templates",
    ],
    ["Royality Free Music", "logos & Idents", "All Music"],
    [
      "Game Sounds",
      "Tranisition & Movement",
      "Interface Sounds",
      "Human Sounds",
      "Urban Sounds",
      "Nature Sounds",
      "Foley Sounds",
      "Domestic Sounds",
      "Voice Sounds",
      "All Sound Effects",
    ],
    [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Sketch",
      "Adobe XD",
      "Affinity Designer",
      "GIMP",
      "CorelDRAW",
      "All Graphic Templates",
    ],
    [
      "Backgrounds",
      "Textures",
      "Illustrations",
      "Patterns",
      "Objects",
      "Decoration",
      "Illustrations",
      "All Graphics",
    ],
    ["Keynotes", "Google Slides", "PowerPoint", "All Presentation Templates"],
    [],
    ["serif", "sans-serif", "Script & Handwritten", "All Fonts"],
    [
      "Actions & Presets",
      "Brushes",
      "Layer Styles",
      "Palettes",
      "Plug-ins",
      "All Add-ons",
    ],
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
