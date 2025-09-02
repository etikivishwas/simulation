import React from 'react'
import styles from './styles.module.css'
import Lottie from 'lottie-react';
import GifB from './gif4.json';
import GifFu from './gif5.json';
import GifS from './gif6.json';
import Gifs from './gif7.json';

function Course() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.title}>Browse our program catalogue</p>
      </div>
      <div className={styles.items}>
        <div className={styles.item1}>
            <p className={styles.para2}>Software Development Engineer</p>
            <p className={styles.para1}>The Software Development Engineer course provides comprehensive training in the 
              design, development, testing, and deployment of high-quality software, utilizing 
              industry-standard tools and methodologies. Through hands-on projects, participants 
              will acquire practical programming skills, cultivate effective teamwork, and gain a 
              thorough understanding of the software development lifecycle. <br />
              Upon completion of the internship, participants will possess the capability to 
              construct and launch real-world applications, thereby enabling them to confidently 
              address engineering challenges within professional settings.
            </p>
        </div>
        <div className={styles.item2}>
            <div className={styles.imageSection}>
              <Lottie 
                animationData={GifS} 
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
            <p className={styles.para2}>Software Testing Engineer </p>
            <p className={styles.para1}>The Software Testing Engineer course provides comprehensive training in manual 
              and automated software testing methodologies, ensuring the development of 
              reliable, functional, and defect-free software. Utilizing industry-standard tools and 
              techniques, participants will engage in practical assignments encompassing test 
              case design, defect identification and reporting, and software quality validation 
              throughout the development lifecycle. <br />Upon completion of the internship, individuals will possess the requisite skills to 
              execute comprehensive testing processes, formulate effective test plans, and 
              confidently verify real-world applications within diverse professional engineering 
              environments.
            </p>
        </div>
        
       </div>
       <div className={styles.items}>
        <div className={styles.item1}>
            <p className={styles.para2}>DevOps </p>
            <p className={styles.para1}>The DevOps course provides comprehensive instruction on integrating development 
              and operations through proficiency in version control, CI/CD pipelines, 
              containerization (Docker & Kubernetes), cloud infrastructure, and automation. 
              Practical exercises will facilitate the deployment and maintenance of scalable, 
              reliable applications within authentic environments. <br />
              Upon completion of the internship, participants will possess expertise in automating 
              software delivery, managing contemporary infrastructure, and collaborating 
              effectively with interdisciplinary teams to provide robust cloud-based and extended 
              solutions.
            </p>
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
                animationData={Gifs} 
                loop={true} 
                className={styles.heroImage} 
              />
            </div>

        </div>
        <div className={styles.item1}>
            <p className={styles.para2}>Software Architect </p>
            <p className={styles.para1}>The Software Architect course provides comprehensive instruction in designing and 
              structuring intricate software systems. Participants will acquire proficiency in 
              architectural principles, design patterns, and modeling methodologies such as UML 
              and C4. The curriculum emphasizes the development of scalable, maintainable, and 
              high-quality software architectures for cloud, mobile, and distributed systems, 
              achieved through practical projects and collaborative exercises. <br />
              Upon completion of the internship, participants will possess the capability to 
              evaluate and design software architectures congruent with business objectives, lead 
              technical decision-making processes, and effectively collaborate with development 
              teams to deliver robust software solutions.
            </p>
        </div>
        
       </div>
    </div>
  )
}

export default Course
