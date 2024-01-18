// Fiction.js
import React from 'react';
import Slider from './Slider';
import './Fiction.css';

const Docs = () => {
  return (
    <div className="fiction-page">
      <div className="grid-container">
        <div className="slider-container">
          <Slider media1="../images/pic1.jpeg" media2="../images/pic2.jpeg" media3="../images/vid.mp4" title='Movie 1' text="Phasellus fringilla turpis sed turpis dignissim, nec cursus ante mollis. Quisque feugiat auctor ipsum, ac tincidunt quam maximus sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut venenatis ligula augue, at vulputate nibh tempor ac. Vestibulum in magna magna. Donec accumsan sapien turpis, et consectetur dui blandit ut. Sed vel molestie magna. Phasellus faucibus non magna id convallis. Integer mollis vitae tortor elementum placerat. Mauris tempor feugiat leo. Sed elementum auctor porta. Quisque venenatis finibus purus eget eleifend. Aenean lacinia porttitor tellus sit amet pretium. Donec faucibus tempus egestas." />
        </div>
        <div className="slider-container">
          <Slider media1="../images/pic1.jpeg" media2="../images/pic2.jpeg" media3="../images/vid.mp4" title='Movie 2' text="Phasellus fringilla turpis sed turpis dignissim, nec cursus ante mollis. Quisque feugiat auctor ipsum, ac tincidunt quam maximus sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut venenatis ligula augue, at vulputate nibh tempor ac. Vestibulum in magna magna. Donec accumsan sapien turpis, et consectetur dui blandit ut. Sed vel molestie magna. Phasellus faucibus non magna id convallis. Integer mollis vitae tortor elementum placerat. Mauris tempor feugiat leo. Sed elementum auctor porta. Quisque venenatis finibus purus eget eleifend. Aenean lacinia porttitor tellus sit amet pretium. Donec faucibus tempus egestas." />
        </div>
        <div className="slider-container">
          <Slider media1="../images/pic1.jpeg" media2="../images/pic2.jpeg" media3="../images/vid.mp4" title='Movie 3' text="Test" />
        </div>
      </div>
    </div>
  );
};

export default Docs;
