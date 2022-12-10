import React from 'react';
import Footer from '../components/layout/Footer';
import { BiSearchAlt, BiWorld, BiBookAdd } from 'react-icons/bi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './About.css';

function About() {
  return (
    <div>
      <div className='about'>
        {/* <img className='about__image' src='../detail.png' alt='recipe' /> */}
        <div className='about__title'>
          <h4>About Foodiefy</h4>
          <h1>"Your Best Platform To Manage Your Favorite Recipes"</h1>
        </div>

        <div className='about__features'>
          <h4>Our Features</h4>
          <div className='about__foodiefy'>
            <div className='about__foodiefy1'>
              <h2>Search</h2>
              <BiSearchAlt size={100} />
            </div>
            <div className='about__foodiefy2'>
              <h2>Explore</h2>
              <BiWorld size={100} />
            </div>
            <div className='about__foodiefy3'>
              <h2>Create</h2>
              <BiBookAdd size={100} />
            </div>
          </div>
        </div>

        <div className='cooking'>
          <img className='cooking__image' src='../cooking.jpg' alt='recipe' />
          <div>
            <h5>Our Mission </h5>
            <h4>"Helps users to manage and explore recipes around the world"</h4>
          </div>
        </div>

        <div className='our-team'>
          <h4>Our team</h4>
          <div className='our-team__body'>
            <div className='dek-arya'>
              <img className='about__image' src='../dek-arya.jpeg' alt='dekarya' />
              <h3>Dek Arya</h3>
              <div>
                <a href='https://github.com/kadekaryasatya'>
                  <AiFillGithub size={30} color='black' />
                </a>
                <a href='https://www.linkedin.com/in/dek-arya/'>
                  <AiFillLinkedin size={30} color='black' />
                </a>
              </div>
            </div>
            <div className='zulham'>
              <img className='about__image' src='../zulham.jpeg' alt='zulham' />
              <h3>Zulham</h3>
              <div>
                <a href='https://github.com/zurizi'>
                  <AiFillGithub size={30} color='black' />
                </a>
                <a href='https://www.linkedin.com/in/muhammad-zulham-alfarizi/'>
                  <AiFillLinkedin size={30} color='black' />
                </a>
              </div>
            </div>
            <div className='dede-oka'>
              <img className='about__image' src='../dede-oka.jpg' alt='dedeoka' />
              <h3>Dede Oka</h3>
              <div>
                <a href='https://github.com/Dedeoka'>
                  <AiFillGithub size={30} color='black' />
                </a>
                <a href='https://www.linkedin.com/in/i-gede-oka-pradnyana-putra-994440253/'>
                  <AiFillLinkedin size={30} color='black' />
                </a>
              </div>
            </div>
            <div className='tri'>
              <img className='about__image' src='../tri.jpeg' alt='tri' />
              <h3>Tri</h3>
              <div>
                <a href='https://github.com/trirahaditya'>
                  <AiFillGithub size={30} color='black' />
                </a>
                <a href='https://www.linkedin.com/in/nyoman-tri-rahaditya-kusuma-9426b51b5/'>
                  <AiFillLinkedin size={30} color='black' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
