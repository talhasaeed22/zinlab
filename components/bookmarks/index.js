import React from "react";
import styles from "./bookmarks.module.css";
import commonStyles from "../../styles/common.module.css";
import ToolBox from "../common/ToolBox";
import { bookmarkData } from "./bookmarkData";
const Bookmarks = ({ heading }) => {
  return (
    <div className={styles.bookmarkContianer}>
      <h1 className={commonStyles.primaryHeading}>{heading}</h1>
      <div className={styles.bookmarkItems}>
        {bookmarkData.map((book, index) => {
          return (
            <ToolBox
              key={index}
              heading={book.heading}
              para={book.para}
              image={book.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Bookmarks;
