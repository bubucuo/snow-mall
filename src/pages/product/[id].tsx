import React, { useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import classnames from 'classnames';
import Carousel from './Carousel';

import styles from './[id].less';
import CartAndBuy from './CartAndBuy';

interface ProductProps {
  dispatch: Dispatch;
  product: {
    imgs: object[];
    price: number;
    title: string;
  };
}

const Product: React.FC<ProductProps> = props => {
  const { dispatch, children } = props;

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'product/query',
      });
    }
  }, []);

  console.log('props', props); //sy-log
  const { imgs, price, title } = props.product;
  return (
    <div className={styles.main}>
      <Carousel data={imgs} />
      <p className={classnames('red', 'bold')}>￥{price}</p>
      <p className={classnames('font14')}>{title}</p>
      <CartAndBuy />
    </div>
  );
};

export default connect(({ product }: ConnectState) => ({ product }))(Product);
