// Slider.js
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Slider.css'
import Laurels from './Laurels';
const Slider = (props) => {
  const { media1, media2, media3, text, title } = props;
  const containerStyles = {
    display: 'flex; flex-direction: row', // Use flexbox to arrange items
    width: '95vh',
  };
  
  return (
    <div style={containerStyles}>
      <AwesomeSlider 
        style={{
          width: '75vw',
          border: '1px solid #4C5958',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }} 
        bullets={false}
      >
        <div className='slider-media' data-src={media1} />
        <div data-src={media2} />
        <div data-src={media3} >
          <video controls>
            <source src="../images/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </AwesomeSlider>
      <div className='textContainerStyles'>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Laurels></Laurels>
    </div>
  );
};

export default Slider;
