import React from 'react'
import styles from './styles.module.css'
import { FaBookOpen } from 'react-icons/fa'
import { FaBriefcase } from 'react-icons/fa6'
import { LuUsers } from 'react-icons/lu'
import { FaArrowTrendDown } from 'react-icons/fa6'

function Fail() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Why Traditional Internships <span className={styles.highlight}>Fail Students</span></h2>
        <p className={styles.para1}>The gap between academic learning and industry requirements is wider than ever.</p>
        <p className={styles.para2}>Here's what students actually face in the job market.</p>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
            <FaBookOpen className={styles.icon} />
            <p className={styles.para3}>Theoretical Learning Gap</p>
            <p>Traditional education focuses on concepts without real-world application, leaving students unprepared for corporate environments.</p>
        </div>
        <div className={styles.item}>
            <LuUsers className={styles.icon} />
            <p className={styles.para3}>Limited Industry Exposure</p>
            <p>Most internships offer coffee-fetching roles instead of meaningful project experience that builds actual skills to the students.</p>
        </div>
        <div className={styles.item}>
            <FaBriefcase className={styles.icon} />
            <p className={styles.para3}>Portfolio & Resume Weakness</p>
            <p>Academic projects don't showcase industry-standard practices and their expertise, making it hard to stand out to recruiters.</p>
        </div>
        <div className={styles.item}>
            <FaArrowTrendDown className={styles.icon} />
            <p className={styles.para3}>Low Placement Success</p>
            <p>Traditional education focuses on concepts without real-world application, leaving students unprepared for corporate environments.</p>
        </div>
      </div>
    </div>
  )
}

export default Fail
