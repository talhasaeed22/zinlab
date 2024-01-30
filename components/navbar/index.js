import styles from "./navbar.module.css";
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
          return <span key={index}>{nav}</span>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
