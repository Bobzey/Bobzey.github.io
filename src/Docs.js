// Fiction.js
import React from 'react';
import Slider from './Slider';
import './Fiction.css';

const Docs = () => {
  const fsfa = ["../images/FSFA/FSFA1.jpeg","../images/FSFA/FSFA4.jpeg","../images/FSFA/FSFA3.jpeg","../images/FSFA/FSFA2.jpeg"]
  const tgm = ["../images/TGM/TGM1.jpg","../images/TGM/TGM2.jpeg","../images/TGM/TGM3.jpeg"]
  const peot = ["../images/PEOT/PEOT.jpg"]
  const fyd = []
  const fsfa_festivals = ['Official Selection IDFA','Official Selection Sheffield Doc Fest']
  const tgm_festivals = ['Cannes Short Film Corner']
  const fyd_festivals = ['Official Selection International Short Film Festival of Cyprus']
  const peot_festivals = ['Produced for Al Jazeera Witness strand']
  return (
    <div className="fiction-page">
      <div className="grid-container">
        <div className="slider-container">
          <Slider media={fsfa} separator = {true} title='Five Scenes from the War in Afghanistan as They Appear in East Sussex' text="From a greenhouse in East Sussex, an ex-soldier talks about his experiences in Afghanistan. After spending ten years on and off in Helmand Province, Clement Boland has returned to his tranquil life in the English countryside, but memories of the war have come home with him. Suffering PTSD, Clement gardens as a form of therapy." festivals={fsfa_festivals}/>
          </div>
        <div className="slider-container">
          <Slider separator = {true} media={tgm} title='The Green Man' text="A teenage boy embarks on a summer of filmmaking in the Welsh countryside, seeking to process recent trauma by writing and directing his first film - a magical realist ‘druid creature feature’ set around the folkloric Green Man." festivals={tgm_festivals}/>
        </div>
        <div className="slider-container">
          <Slider separator = {true} media={peot} title='Please Enjoy our Tragedies' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis tempor massa, nec luctus enim egestas vel. Vestibulum auctor velit nisi, id bibendum lacus convallis vel. Sed ut augue quis libero molestie rutrum. Aliquam sem leo, vestibulum ut blandit ut, ullamcorper a nunc. Mauris vestibulum eros et ante semper, eu ullamcorper dolor facilisis. Maecenas maximus felis nec consequat eleifend. Phasellus eu vulputate lectus, non tincidunt tortor." festivals={peot_festivals}/>
        </div>
        <div className="slider-container">
          <Slider separator = {true} media={tgm} title='Fuck You Dover' text="Images of migrants have become a daily occurrence for the local Brits; completely apathetic when a tragedy occurs, by their sheer indifference and minimization of the calamity." festivals={fyd_festivals}/>
        </div>
      </div>
    </div>
  );
};

export default Docs;