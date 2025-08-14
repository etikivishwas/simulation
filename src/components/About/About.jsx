import React from 'react'
import styles from './styles.module.css'
import MyPng from './pic2.png'
import Lottie from 'lottie-react';
import aboutAnimation from './gif2.json';

function About() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.heading}>About the program</h2>
            <img className={styles.image} src={MyPng} alt="About the program" />
        </div>
        <div className={styles.content}>
            <div className={styles.paragraph}>
                <p className={styles.para}>Cutting-edge, AI-powered internship and capstone experience designed to mirror workflows at top MNC’s like TCS, Accenture, AWS, Flipkart, and Infosys. The program integrates real corporate tools, processes, and standards, ensuring participants gain hands-on experience that matches industry expectations.</p>
            </div>
            <div className={styles.imageSection}>
              <Lottie 
                animationData={aboutAnimation} 
                loop={true} 
                className={styles.heroImage} 
              />
            </div>
        </div>
        
    </div>
  )
}

export default About
