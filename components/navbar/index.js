import styles from "./navbar.module.css";
import { useState, useEffect } from "react";

import Image from "next/image";
import {
  navitem,
  dropdownContents,
  moreData,
  navitems2,
  doropdownContent2,
} from "./navitems";
const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [navitems, setNavItems] = useState(navitem);
  const [dropdownContent, setDropdownContent] = useState(dropdownContents);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setNavItems(
        window.innerWidth <= 1250 && window.innerWidth > 1100
          ? navitems2
          : navitem
      );
      setDropdownContent(
        window.innerWidth <= 1250 && window.innerWidth > 1100
          ? doropdownContent2
          : dropdownContents
      );
    };

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const isLess = windowWidth <= 1250;

  const [moreItemIndex, setMoreItemIndex] = useState(0);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropSelected, setMobileDropSelected] = useState("");

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleNavitemHover = (navitem) => {
    setActiveDropdown(navitem);
  };

  const handleNavitemLeave = () => {
    setActiveDropdown(null);
  };
  const handleMobileSelected = (e) => {
    console.log(e);
    if (e === mobileDropSelected) {
      setMobileDropSelected("");
    } else {
      setMobileDropSelected(e);
    }
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
            alt="logo"
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
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
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
                <Image src="vercel.svg" width={100} height={50} alt="logo" />
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
                  <>
                    <div
                      onClick={() => {
                        handleMobileSelected(nav);
                      }}
                      key={index}
                      className={styles.navItemWrapper}
                    >
                      <span>{nav}</span>
                      {mobileDropSelected === nav &&
                      dropdownContent[index].length > 0 ? (
                        <i
                          className="fa fa-chevron-down"
                          aria-hidden="true"
                        ></i>
                      ) : (
                        <i
                          className="fa fa-chevron-right"
                          aria-hidden="true"
                        ></i>
                      )}
                    </div>
                    {mobileDropSelected === nav &&
                      dropdownContent[index].map((item, idx) => (
                        <div key={idx} className={styles.navItemWrapper}>
                          <span className={styles.dropdownSpan}>{item}</span>
                        </div>
                      ))}
                  </>
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
