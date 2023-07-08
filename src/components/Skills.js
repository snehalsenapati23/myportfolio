import React from 'react';
import HTML from '../assets/img/html.png';
import CSS from '../assets/img/css.png';
import JavaScript from '../assets/img/javascript.png';
import ReactImg from '../assets/img/react.png';
import Node from '../assets/img/node.png';
import Mongo from '../assets/img/sql.png';
import FireBase from '../assets/img/firebase.png';
import GitHub from '../assets/img/github.png';
import Tailwind from '../assets/img/tailwind.png';


const Skills = () => {
  return (
    <>
      {/* Container */}
      <div name='skills' id='skills'>
        <div className="title3">
        <h1>My Skills</h1>
       <p>Technologies I use in my development:</p>
        </div>

          <div className='text-center skills1'>
              <div className='anim'>
                  <img className='img1' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='anim'>
                  <img className='img1' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='anim'>
                  <img className='img1' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='anim'>
                  <img className='img1' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='anim'>
                  <img className='img1' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='anim'>
                  <img className='' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='anim'>
                  <img className='img1' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>SQL</p>
              </div>
              <div className='anim'>
                  <img className='img1' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='anim'>
                  <img className='img1' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
          </div>
      </div>
    </>
  );
};

export default Skills;