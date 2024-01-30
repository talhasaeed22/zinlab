import Link from "next/link";
import React from "react";
import styles from "./slider.module.css";
import commonStyles from "../../styles/common.module.css";
import { sliderData } from "./sliderData";
import Image from "next/image";
import ToolBox from "../common/ToolBox";
const Slider = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 430;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 430;
  };
  return (
    <>
      <div className={styles.container}>
        <h3 className={commonStyles.primaryHeading}>Convert from PDF</h3>

        <div className={styles.sliderBody}>
          <i
            className={`fa fa-arrow-circle-o-left ${styles.leftArrow}`}
            onClick={slideLeft}
            aria-hidden="true"
          ></i>
          <div className={styles.toolbox} id="slider">
            {sliderData.map((slide) => {
              return (
                <div style={{ width: "300px" }}>
                  <ToolBox
                    heading={slide.heading}
                    image={slide.image}
                    para={slide.para}
                  />
                </div>
              );
            })}
          </div>
          <i
            className={`fa fa-arrow-circle-o-right ${styles.rightArrow}`}
            onClick={slideRight}
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </>
  );
};
export default Slider;
