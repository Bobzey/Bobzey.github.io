import React from 'react';

const Footer = () => {
  return (
    <footer className='footer_bar'>
        <div className="grid-container">
        <div><i className="material-symbols-outlined" style={{ color: '#FFD369',
                                                               fontSize: '3em'}}>mail</i></div>

        <div><i className="material-symbols-outlined" style={{ color: '#FFD369',
                                                               fontSize: '3em' }}>home</i></div>

        <div><i className="material-symbols-outlined" style={{ color: '#FFD369',
                                                               fontSize: '3em' }}>info</i></div>
      </div>
         
    </footer>
  );
};

export default Footer;