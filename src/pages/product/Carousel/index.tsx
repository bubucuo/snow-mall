import React, { useState } from 'react';
import { Card, Carousel } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';

export default ({ data = [] }) => {
  const [imgHeight, setImgHeight] = useState(176);
  return (
    <Card full>
      <Carousel className={styles.main} autoplay={false} infinite>
        {data.map((item, index) => (
          <a
            className={classnames(styles.carouselItem, 'xyCenter')}
            key={index}
            style={{
              height: imgHeight,
            }}
          >
            <img
              src={item}
              alt="图片"
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                setImgHeight('auto');
              }}
            />
          </a>
        ))}
      </Carousel>
    </Card>
  );
};
