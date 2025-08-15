import React from 'react'
import styles from './styles.module.css'
import Lottie from 'lottie-react';
import GifF from './gif3.json';
import GifB from './gif4.json';
import GifFu from './gif5.json';

function Course() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.title}>Browse our program catalogue</p>
      </div>
      <div className={styles.items}>
        <div className={styles.item1}>
            <p className={styles.para2}>Front-end Development</p>
            <p className={styles.para1}>Gain hands-on experience in Frontend Development with real-world corporate workflows. Our program equips you with practical skills in HTML, CSS, JavaScript, and modern frameworks while simulating professional project environments. Using cloud-based VMware workspaces, you’ll collaborate, troubleshoot, and deliver just like in a corporate setting. This immersive approach not only sharpens your technical expertise but also builds essential workplace problem-solving and communication skills. Step into the world of frontend development prepared for the demands of the modern corporate landscape.</p>
        </div>
        <div className={styles.item2}>
            <div className={styles.imageSection}>
              <Lottie 
                animationData={GifF} 
                loop={true} 
                className={styles.heroImage} 
              />
            </div>

        </div>
       </div>
       <div className={styles.items}>
        <div className={styles.item2}>
            <div className={styles.imageSection}>
              <Lottie 
                animationData={GifB} 
                loop={true} 
                className={styles.heroImage} 
              />
            </div>

        </div>
        <div className={styles.item1}>
            <p className={styles.para2}>Back-end Development</p>
            <p className={styles.para1}>Master Backend Development through immersive, corporate-style training. Our program focuses on building robust server-side applications using technologies like Python, Django, Node.js, and MySQL, all within a simulated enterprise environment. With cloud-based VMware labs, you’ll work on real-world scenarios involving APIs, databases, and security protocols. This hands-on approach enhances not just your coding skills, but also your ability to solve complex problems under real workplace conditions. Prepare to excel in backend development with the confidence and competence of a corporate professional.</p>
        </div>
        
       </div>
       <div className={styles.items}>
        <div className={styles.item1}>
            <p className={styles.para2}>Fullstack Development</p>
            <p className={styles.para1}>Become a proficient Full Stack Developer with real-world corporate project experience. Our program covers both frontend technologies like HTML, CSS, JavaScript, and React, and backend frameworks such as Python, Django, Node.js, and MySQL. Using cloud-based VMware environments, you’ll build, deploy, and maintain complete applications from start to finish, mirroring enterprise workflows. This end-to-end training strengthens your technical versatility while sharpening collaboration, problem-solving, and agile development skills. Step confidently into the corporate world as a job-ready full stack professional.</p>
        </div>
        <div className={styles.item2}>
            <div className={styles.imageSection}>
              <Lottie 
                animationData={GifFu} 
                loop={true} 
                className={styles.heroImage} 
              />
            </div>

        </div>
       </div>
              <div className={styles.items}>
                <div className={styles.item2}>
            <div className={styles.imageSection}>
              <Lottie 
                animationData={GifF} 
                loop={true} 
                className={styles.heroImage} 
              />
            </div>

        </div>
        <div className={styles.item1}>
            <p className={styles.para2}>Front-end Development</p>
            <p className={styles.para1}>Gain hands-on experience in Frontend Development with real-world corporate workflows. Our program equips you with practical skills in HTML, CSS, JavaScript, and modern frameworks while simulating professional project environments. Using cloud-based VMware workspaces, you’ll collaborate, troubleshoot, and deliver just like in a corporate setting. This immersive approach not only sharpens your technical expertise but also builds essential workplace problem-solving and communication skills. Step into the world of frontend development prepared for the demands of the modern corporate landscape.</p>
        </div>
        
       </div>
    </div>
  )
}

export default Course
