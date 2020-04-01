import React, { useState } from 'react';
import { Carousel } from 'antd-mobile';
import styles from './index.less';

export default ({ data = [] }) => {
  const [imgHeight, setImgHeight] = useState(176);
  return (
    <Carousel className={styles.main} autoplay={false} infinite>
      {data.map(item => (
        <a
          className={styles.carouselItem}
          key={item.src}
          style={{
            height: imgHeight,
          }}
        >
          <img
            src={item.src}
            alt={item.alt}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              setImgHeight('auto');
            }}
          />
        </a>
      ))}
    </Carousel>
  );
};
