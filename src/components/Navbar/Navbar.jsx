import React from "react";
import styles from "./styles.module.css";
import { MotionDiv } from "../motionComponents/motionComponents";
import logo from "./logo.png"; // Import logo image

function Navbar() {
  return (
    <div className={styles.container}>
      <MotionDiv className={styles.navbar}>
        <img src={logo} alt="VECTOR.Edu Logo" className={styles.logo} />
      </MotionDiv>
    </div>
  );
}

export default Navbar;
