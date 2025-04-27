import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import dashImg from '../../assets/img/DashBoard.png'
import review1 from '../../assets/img/review1.avif'
import review2 from '../../assets/img/review2.avif'
import review3 from '../../assets/img/review3.avif'
import review4 from '../../assets/img/review4.avif'
import review5 from '../../assets/img/review5.avif'
import review6 from '../../assets/img/review6.avif'

const Home = () => {
  return (
    <div>
      <section id='home-header'>
        <div id='para-content'>
          <h1>Student Assessment and Performance Monitoring Website: Track Student Progress</h1>
          <p>Ensure your students are always on the right track with student assessment and performance monitoring website.</p>
          <Link>Drop a Quary</Link>
        </div>
        <div id='img-sec'>

          <img src={dashImg} alt="DashBoard Image" />

        </div>
      </section>
      <section id='home-content'>
        <div>
          <h2 className='h-head center'>What are the benefits of student assessment and performance monitoring website for schools or colleges?</h2>
        </div>
        <div className="container-1">
          <div className="img-details">
            <img src={review1} alt="" />
          </div>
          <div className="para-sec">
            <h2>Comprehensive performance monitoring</h2>
            <p>The website enables continuous tracking of student performance through assessment results and cumulative scores across various learning areas and subjects. This comprehensive view offers educators insights into individual student strengths and areas for their improvement and growth.</p>
          </div>
        </div>
        <div className="container-1">

          <div className="para-sec">
            <h2>Monitor student progress</h2>
            <p>With a longitudinal perspective, educators gain a deeper understanding of each student's learning journey. This historical data facilitates personalised teaching approaches and timely interventions to nurture continuous improvement.</p>
          </div>
          <div className="img-details">
            <img src={review2} alt="" />
          </div>
        </div>
        <div className="container-1">
          <div className="img-details">
            <img src={review3} alt="" />
          </div>
          <div className="para-sec">
            <h2>Holistic marksbook</h2>
            <p>This website presents a detailed grading scale and ranks information for every student across assessments, learning areas, and subjects. This transparency supports fair comparisons and informed decision-making for both teachers and school leaders.</p>
          </div>
        </div>
        <div className="container-1">

          <div className="para-sec">
            <h2>Improved feedback cycle</h2>
            <p>Individual comments linked to grades provide valuable context for students around their performance. These comments give students feedback for their ongoing development and serve as a rich resource when generating academic reports, facilitating more meaningful communication with students and parents.</p>
          </div>
          <div className="img-details">
            <img src={review4} alt="" />
          </div>
        </div>
        <div className="container-1">
          <div className="img-details">
            <img src={review5} alt="" />
          </div>
          <div className="para-sec">
            <h2>Customisable grading scales</h2>
            <p>The website empowers schools to design grading scales that align with their unique educational philosophies. Whether using numeric, letter, text, or emoji-based scales, schools can tailor the assessment system to suit their specific needs.</p>
          </div>
        </div>
        <div className="container-1">

          <div className="para-sec">
            <h2>Customisable school assessments</h2>
            <p>Whether it's essays, quizzes, or projects, educators can leverage the website's user-friendly tools to craft a diverse range of assessments. These assessments are thoughtfully aligned with their teaching approach and the precise learning objectives of each subject, promoting a more engaging and effective learning experience.</p>
          </div>
          <div className="img-details">
            <img src={review6} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;