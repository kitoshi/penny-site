import bee from '../images/bee.jpg';
import elk from '../images/elk.jpg';
import frog from '../images/frog.jpeg';
import owl from '../images/owl.jpeg';
import rick from '../images/rick.jpeg';
import fairy from '../images/fairy.jpeg';
import { useState, useEffect } from 'react';
import React from 'react';

function Carousel() {
  const [activePic, setPic] = useState('');
  const [carouselFocus, setFocus] = useState(0);
  const handlePic = (e) => {
    const active = e.target.alt;
    const modal = document.querySelector('div.modal');
    if (activePic === altText[altText.indexOf(activePic)]) {
      setPic(() => '');
      modal.style.display = 'none';
    } else {
      setPic(() => active);
      modal.style.display = 'flex';
    }
  };
  const handleFocusRight = () => {
    if (carouselFocus === 5) {
      setFocus(0);
    } else {
      setFocus((currentValue) => currentValue + 1);
    }
  };

  useEffect(() => {
    const carouselBackground = document.querySelector('div.carousel');
    if (carouselFocus === 0) {
      carouselBackground.style.backgroundColor = '#486c7b';
    } else if (carouselFocus === 1) {
      carouselBackground.style.backgroundColor = '#352f33';
    } else if (carouselFocus === 2) {
      carouselBackground.style.backgroundColor = '#595959';
    } else if (carouselFocus === 3) {
      carouselBackground.style.backgroundColor = '#1c0702';
    } else if (carouselFocus === 4) {
      carouselBackground.style.backgroundColor = '#9d6b0f';
    } else if (carouselFocus === 5) {
      carouselBackground.style.backgroundColor = '#deae40';
    }
    return () => {};
  }, [carouselFocus]);

  const handleFocusLeft = () => {
    if (carouselFocus === 0) {
      setFocus(5);
    } else {
      setFocus((currentValue) => currentValue - 1);
    }
  };

  /*const imagesColors = [
    '#486c7b',
    '#352f33',
    '#595959',
    '#1c0702',
    '#9d6b0f',
    '#deae40',
  ];*/

  const images = [elk, frog, owl, rick, bee, fairy];
  const altText = ['elk', 'frog', 'owl', 'rick', 'bee', 'fairy'];
  const imageInfo = [
    'Elk, November 10, 2021',
    'Frog, November 10, 2021',
    'Owl, November 10, 2021',
    'Rick , November 10, 2021',
    'Bee, November 10, 2021',
    'Fairy, November 10, 2021',
  ];

  const imageItem = images.map((element, index) => (
    <li
      key={element}
      className='imagelistitem'
      style={{
        display: index === carouselFocus ? 'flex' : 'none',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <img
        index={images.indexOf(element)}
        src={element}
        alt={altText[images.indexOf(element)]}
        onClick={handlePic}
        className={'paint'}
        style={{
          display: index === carouselFocus ? 'flex' : 'none',
          width: '100%',
          margin: 'auto',
          height: 'auto',
          border: '5px solid',
        }} //ternary function inline
      />
    </li>
  ));
  return (
    <div
      className='carousel'
      style={{
        height: '100vh',
        margin: 'auto',
        transition: 'background 1s',
        transitionTimingFunction: 'ease-in-out',
      }}
    >
      <ul
        className='carousellist'
        style={{
          display: 'flex',
          listStyle: 'none',
          height: '100%',
        }}
      >
        <li
          className='arrow'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#000000'
            alt='left arrow'
            onClick={handleFocusLeft}
            style={{ width: '50px' }}
          >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z' />
          </svg>
        </li>
        {imageItem}
        <li
          className='arrow'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#000000'
            onClick={handleFocusRight}
            style={{ width: '50px' }}
            alt='right arrow'
          >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z' />
          </svg>
        </li>
      </ul>
      <div className='modal' onClick={handlePic}>
        <img
          src={images[altText.indexOf(activePic)]}
          className='modal-content'
          alt={altText[altText.indexOf(activePic)]}
        ></img>
        <p className='paintinfo modal-text'>
          {imageInfo[altText.indexOf(activePic)]}
        </p>
      </div>
    </div>
  );
}

export default Carousel;
