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
    ["asd"],
  ];

  const [moreItemIndex, setMoreItemIndex] = useState(0);

  const [mobileOpen, setMobileOpen] = useState(false);

  const moreData = [
    {
      title: "CMS Templates",
      sub_items1: [
        "Dropal",
        "Joomla",
        "Magento",
        "Muse",
        "OpenCart",
        "prestaShop",
      ],
      sub_items2: ["Shopify", "Unbounce", "Ghost", "Tumblr"],
      ending: "All CSS Templates",
    },
    {
      title: "WordPress",
      sub_items1: ["Themes", "Plugins", "Template Kits"],
      ending: "All WordPress",
    },
    {
      title: "3D",
      ending: "All 3D",
    },
    {
      title: "Free Files",
      ending: "Monthly Free Files",
    },
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
        {/* For Mobile */}
        <div className={styles.mobileNavbarButton}>
          <button onClick={() => setMobileOpen(true)}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
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
              {activeDropdown === nav &&
                dropdownContent[index].length > 0 &&
                activeDropdown !== "More" && (
                  <div className={styles.dropdown}>
                    {dropdownContent[index].map((item, idx) => (
                      <span key={idx}>{item}</span>
                    ))}
                  </div>
                )}
              {nav === "More" && activeDropdown === "More" && (
                <div className={styles.Moredropdown}>
                  <div className={styles.dropdownLeft}>
                    <div
                      onMouseEnter={() => {
                        setMoreItemIndex(0);
                      }}
                      className={styles.arrowCont}
                    >
                      <span>CMS Template</span>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <div
                      onMouseEnter={() => {
                        setMoreItemIndex(1);
                      }}
                      className={styles.arrowCont}
                    >
                      <span>WordPress</span>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <div
                      onMouseEnter={() => {
                        setMoreItemIndex(2);
                      }}
                      className={styles.arrowCont}
                    >
                      <span>3D</span>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <div
                      onMouseEnter={() => {
                        setMoreItemIndex(3);
                      }}
                      className={styles.arrowCont}
                    >
                      <span>FreeFIles</span>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className={styles.dropdownRight}>
                    <p className={styles.dropdownRightHeading}>
                      {moreData[moreItemIndex].title}
                    </p>
                    {moreData[moreItemIndex].sub_items1 &&
                      moreData[moreItemIndex].sub_items2 && (
                        <div className={styles.rightCols}>
                          {moreData[moreItemIndex].sub_items1 && (
                            <div className={styles.rightColsData}>
                              {moreData[moreItemIndex].sub_items1.map(
                                (item, idx) => (
                                  <span key={idx}>{item}</span>
                                )
                              )}
                            </div>
                          )}
                          {moreData[moreItemIndex].sub_items2 && (
                            <div className={styles.rightColsData}>
                              {moreData[moreItemIndex].sub_items2.map(
                                (item, idx) => (
                                  <span key={idx}>{item}</span>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    <div className={styles.dropdownRightEndingContainer}>
                      <p className={styles.dropdownRightEnding}>
                        {moreData[moreItemIndex].ending}
                      </p>
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Mobile Navbar */}
      {mobileOpen && (
        <div className={styles.mobileNavbarContainer}>
          <div className={styles.mobileNavbar}>
            <div className={styles.mobileNavbrHeader}>
              <div className={styles.mobileNavbarImageContianer}>
                <Image src="vercel.svg" width={100} height={50} />
                <i
                  onClick={() => {
                    setMobileOpen(false);
                  }}
                  className="fa fa-times"
                  aria-hidden="true"
                ></i>
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
              {navitems.map((nav, index) => {
                return (
                  <div key={index} className={styles.navItemWrapper}>
                    <span>{nav}</span>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
