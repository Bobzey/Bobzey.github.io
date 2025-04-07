// Fiction.js
import React from 'react';
import Slider from './Slider';
import './Fiction.css';

const Fiction = () => {
  const tto = ["../images/TornadoOutside/The Tornado Outside still image 06.jpg","../images/TornadoOutside/The Tornado Outside still image 08.jpg","../images/TornadoOutside/The Tornado Outside still image 14.jpg"]
  const ttomf = ["../images/TTOMF/TTOMF_1.1.10.jpeg","../images/TTOMF/TTOMF_1.1.20.jpeg","../images/TTOMF/TTOMF_1.1.68.jpeg"]
  const casuals= ["../images/Casuals/Casuals1.jpeg","../images/Casuals/Casuals2.jpeg","../images/Casuals/Casuals3.jpeg","../images/Casuals/Casuals4.jpeg","../images/Casuals/Casuals5.jpeg"]
  const bleach = ["../images/Bleach/bleach1.png","../images/Bleach/bleach2.png","../images/Bleach/bleach3.png","../images/Bleach/bleach5.png","../images/Bleach/bleach4.png"]
  const tto_festivals = ['Official Selection Anibar Animation Festival', 'Student BAFTA LA Finalist', 'Special Jury Award Drama International Short Film Festival','Official Selection Encounters Short Film and Animation Festival'
  ,'Best British Animation Discover Film Awards','Ones to watch runner up London Short Film Festival','Official Selection Aspen Shortsfest',
'Official Selection n The Palace international Short Film Festival','Official Selection Palm Springs International']
  const ttomf_festivals = ['Shortlist Bafta Yugo Best Live Action','Bolton Film Festival Official Selection']
  const bleach_festivals = ['GAZE INTERNATIONAL LGBTQIA FILM FESTIVAL', 'IRIS PRIZE LGBTQ+ FILM FESTIVAL','Winner Best International Short GAZE']
  const casuals_festivals = ['RTS Postgraduate Comedy & Drama Winner']
  return (
    <div className="fiction-page">
      <div className="grid-container">
        <div className="slider-container">
          <Slider separator = {true} media={tto} title='The Tornado Outside' text="A young woman named Anna lives in a stable, perfect house, anchored in space, locked safely away from the chaotic Tornado that rages outside. Only when her house keys are blown away, is she forced to confront the chaos that she works so hard to avoid. As she navigates her way through the tornado to retrieve her keys, she encounters a variety of people, living their normal lives, embracing the chaos. Anna's perspective on life is challenged as she must decide whether to join the unpredictable world of the tornado, or go back to the safety of her tethered house." festivals={tto_festivals}/>
           </div>
        <div className="slider-container">
          <Slider separator = {true} media={ttomf} title ='The Tree of Many Faces' text="A Slavic folk tale unfurls when a lovelorn woman decides to sacrifice her soul for the heart of another." festivals={ttomf_festivals}/>
        </div>
        <div className="slider-container">
          <Slider separator = {true} media = {casuals} title="Casuals" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis tempor massa, nec luctus enim egestas vel. Vestibulum auctor velit nisi, id bibendum lacus convallis vel. Sed ut augue quis libero molestie rutrum. Aliquam sem leo, vestibulum ut blandit ut, ullamcorper a nunc. Mauris vestibulum eros et ante semper, eu ullamcorper dolor facilisis. Maecenas maximus felis nec consequat eleifend. Phasellus eu vulputate lectus, non tincidunt tortor." festivals={casuals_festivals}/>
        </div>
        <div className="slider-container">
          <Slider separator = {true} media = {bleach} title="Bleach" text="Gay and lonely, Lloyd is on a shame-fuelled, Grindr-addicted spiral into tragedy." festivals={bleach_festivals}/>
        </div>
      </div>
    </div>
  );
};

export default Fiction;

