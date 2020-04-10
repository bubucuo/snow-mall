import React, { useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import { ConnectState } from '@/models/connect';
import classnames from 'classnames';
import { Card, WhiteSpace, Tag } from 'antd-mobile';
import Carousel from './Carousel';
import styles from './[id].less';
import CartAndBuy from './CartAndBuy';
import { ProductType } from 'types/Product';
import Tags from '@/components/Tags';

interface ProductProps {
  match: any;
  dispatch: Dispatch;
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ match, dispatch, product }) => {
  useEffect(() => {
    dispatch({
      type: 'product/query',
      payload: match.params,
    });
  }, []);

  const { imgs, price, title, tags } = product;
  return (
    <div className={styles.main}>
      <Carousel data={imgs} />
      <WhiteSpace size="lg"></WhiteSpace>

      <Card full>
        <p className={classnames('red', 'bold')}>￥{price}</p>
        <p className={classnames('font14')}>{title}</p>
        <WhiteSpace size="lg"></WhiteSpace>
        <Tags tags={tags} />
      </Card>

      <CartAndBuy {...product} />
    </div>
  );
};

export default connect(({ product }: ConnectState) => ({ product }))(Product);
