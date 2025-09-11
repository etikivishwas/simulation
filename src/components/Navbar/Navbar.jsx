import React from 'react'
import styles from "./styles.module.css";
import { MotionDiv } from "../motionComponents/motionComponents";

function Navbar() {
  return (
    <div className={styles.container}>
      <MotionDiv className={styles.navbar}>
        <h2 className={styles.heading}>VECTOR.Edu</h2>
      </MotionDiv>
    </div>
  )
}

export default Navbar
