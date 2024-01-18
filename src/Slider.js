// Slider.js
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Slider.css'

const Slider = (props) => {
  const { media1, media2, media3, text, title } = props;
  const containerStyles = {
    display: 'flex', // Use flexbox to arrange items
  };
  
  const textContainerStyles = {
    flex: 1, 
    marginLeft: '20px',
  };

  return (
    <div style={containerStyles}>
      <AwesomeSlider 
        style={{
          marginLeft: '10px',
          width: '700px',
          height: '250px',
          border: '1px solid #4C5958',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
         
        }} 
        bullets={false}
      >
        <div className='slider-media'data-src={media1} />
        <div data-src={media2} />
        <div data-src={media3} >
          <video controls>
            <source src="../images/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </AwesomeSlider>
      <div style={textContainerStyles}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Slider;
