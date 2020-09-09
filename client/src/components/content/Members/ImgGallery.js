import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../../../Members.css';
import karel from '../../../assets/Images/YFC/Heads/Karel.jpg';
import jaden from '../../../assets/Images/YFC/Heads/Jaden.jpg';
import dave from '../../../assets/Images/YFC/Heads/Dave.jpg';
import joshua from '../../../assets/Images/YFC/Heads/Joshua.jpg';
import yna from '../../../assets/Images/YFC/Heads/Yna.jpg';
import kriziel from '../../../assets/Images/YFC/Heads/Kriziel.jpg';
import melanie from '../../../assets/Images/YFC/Heads/Melanie.jpg';
import ricka from '../../../assets/Images/YFC/Heads/Ricka.jpg';
import gina from '../../../assets/Images/YFC/Heads/Carriza.jpg';
import angelica from '../../../assets/Images/YFC/Heads/Angelica.jpg';
import kathlyn from '../../../assets/Images/YFC/Heads/Kathlyn.jpg';
import mika from '../../../assets/Images/YFC/Heads/Mika.jpg';
import waki from '../../../assets/Images/YFC/Heads/Waki.jpg';
import mj from '../../../assets/Images/YFC/Heads/MJ.jpg';
import gerome from '../../../assets/Images/YFC/Heads/Gerome.jpg';
import charry from '../../../assets/Images/YFC/Heads/Charry.jpg';
import dannah from '../../../assets/Images/YFC/Heads/Dannah.jpg';
import lysandra from '../../../assets/Images/YFC/Heads/Lysandra.jpg';
import gerelyn from '../../../assets/Images/YFC/Heads/Gerelyn.jpg';

const ImgGallery = () => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imgs = [
    karel,
    jaden,
    dave,
    joshua,
    yna,
    kriziel,
    melanie,
    ricka,
    gina,
    angelica,
    kathlyn,
    mika,
    waki,
    mj,
    gerome,
    charry,
    dannah,
    lysandra,
    gerelyn,
  ];
  const desc = [
    'Karel Dacara',
    'Jaden Licud',
    'Charles Torres',
    'Joshua Garcia',
    'Yna Marguerite',
    'Kriziel Fabian',
    'Melanie Agner',
    'Ricka Perez',
    'Gina Tanedo',
    'Angelica Ubaldo',
    'Kathlyn Fabian',
    'Mikaela Paner',
    'Joseph Wakin Ubaldo',
    'Michael Josh De Torres',
    'Gerome Abordo',
    'Charry Bulaclac',
    'Danñah Daquioag',
    'Lysandra Mae Castillo',
    'Gerelyn Pineda',
  ];

  const images = imgs.map((img, i) => ({
    original: img,
    thumbnail: img,
    description: desc[i],
  }));

  return (
    <ImageGallery
      items={images}
      infinite={true}
      thumbnailPosition={windowDimensions.width <= 575 ? 'bottom' : 'left'}
      showFullscreenButton={false}
      showPlayButton={false}
      autoPlay={true}
      slideInterval={3000}
    />
  );
};

export default ImgGallery;
