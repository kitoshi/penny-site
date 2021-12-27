import bee from '../images/bee.jpg';
import elk from '../images/elk.jpg';
import frog from '../images/frog.jpeg';
import owl from '../images/owl.jpeg';
import rick from '../images/rick.jpeg';
import fairy from '../images/fairy.jpeg';
import rightarrow from '../images/chevron_right_black.svg';
import leftarrow from '../images/chevron_left_black.svg';
import { useState } from 'react';
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
      className="imagelistitem"
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
    <div className="carousel" style={{ height: '100vh', margin: 'auto' }}>
      <ul
        className="carousellist"
        style={{
          display: 'flex',
          listStyle: 'none',
          height: '100%',
        }}
      >
        <li
          className="arrow"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <img
            src={leftarrow}
            alt="left arrow"
            onClick={handleFocusLeft}
            style={{ width: '50px' }}
          ></img>
        </li>
        {imageItem}
        <li
          className="arrow"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <img
            src={rightarrow}
            alt="right arrow"
            onClick={handleFocusRight}
            style={{ width: '50px' }}
          ></img>
        </li>
      </ul>
      <div className="modal" onClick={handlePic}>
        <img
          src={images[altText.indexOf(activePic)]}
          className="modal-content"
          alt={altText[altText.indexOf(activePic)]}
        ></img>
        <p className="paintinfo modal-text">
          {imageInfo[altText.indexOf(activePic)]}
        </p>
      </div>
    </div>
  );
}

export default Carousel;
