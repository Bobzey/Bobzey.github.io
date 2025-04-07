// Slider.js
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Divider from '@mui/material/Divider';  // Import Divider from Material-UI
import './Slider.css';
import FestivalList from './FestivalList';
import { Padding } from '@mui/icons-material';

const Slider = (props) => {
  const { media, text, title, festivals, separator } = props;  // Renamed "seperator" to "separator"

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  };

  return (
    <div style={containerStyles}>
        <h2 id='titleStyles'>{title}</h2>
      <AwesomeSlider
        style={{
          width: '90vw',
          maxWidth: '900px',
          border: '1px solid #4C5958',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
        bullets={false}
      >
        {media.map((mediaItem, index) => (
          <div key={index} className='slider-media' data-src={mediaItem} />
        ))}
      </AwesomeSlider>
      <div className='textContainerStyles'>
        <p className='film-bio'>{text}</p>
      </div>
      {separator ? <Divider variant="middle" style={{ borderColor:'white', width: '80%', margin: '16px 0' }} /> : null}
      <FestivalList festivals={festivals}/>
      {separator ? <Divider variant="middle" style={{ borderColor:'white', width: '30%', margin: '16px 0' }} /> : null}
    </div>
  );
};

export default Slider;
