import React from "react";
import commonStyles from "../../styles/common.module.css";
import styles from "./common.module.css";
import Image from "next/image";
const ToolBox = ({ heading, para, image }) => {
  return (
    <div className={styles.toolBox}>
      <Image
        src={image}
        width={50}
        height={50}
        className={styles.boxImage}
      ></Image>
      <h1 className={commonStyles.secondaryHeading}>{heading}</h1>
      <span className={commonStyles.para}>{para}</span>
    </div>
  );
};

export default ToolBox;
