import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./slider.module.css";
import commonStyles from "../../styles/common.module.css";
import { sliderData } from "./sliderData";
import Image from "next/image";
import ToolBox from "../common/ToolBox";
const Slider = () => {
  const [scrollDistance, setScrollDistance] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      // Check client width and set scroll distance accordingly
      if (window.innerWidth > 500) {
        setScrollDistance(270);
      } else {
        setScrollDistance(230);
      }
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - scrollDistance;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + scrollDistance;
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h3 className={commonStyles.primaryHeading}>Convert from PDF</h3>
          <div className={styles.right}>
            <span>ALL</span>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
        <div className={styles.sliderBody}>
          <i
            className={`fa fa-arrow-circle-o-left ${styles.leftArrow}`}
            onClick={slideLeft}
            aria-hidden="true"
          ></i>
          <div className={styles.toolbox} id="slider">
            {sliderData.map((slide, index) => {
              return (
                <div key={index} className={styles.toolBoxContainer}>
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
