import React from 'react';
import { ProductListType, ProductType } from 'types/Product';
import { WingBlank, Grid, Card } from 'antd-mobile';
import styles from './index.less';
import { Link } from 'umi';

const node = ({ id, img, title }: ProductType) => {
  return (
    <Link className={styles.node} to={'/product/' + id}>
      <div className="oneRow">{title}</div>
      <img className={styles.nodeImg} src={img} />
    </Link>
  );
};

interface RecommendProps {
  list: ProductListType;
}

const Recommend: React.FC<RecommendProps> = ({ list }) => {
  const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
  }));
  return (
    <>
      <WingBlank size="lg" className={styles.main}>
        <Card>
          <Card.Header title="好货推荐" />
          <Grid
            data={list.slice(0, 6)}
            columnNum={3}
            renderItem={node}
            hasLine={true}
          />
        </Card>
      </WingBlank>
      <WingBlank size="lg" className={styles.main2}>
        <Card>
          <Card.Header title="猜你喜欢" />
          <Grid
            data={list.slice(6)}
            columnNum={2}
            renderItem={node}
            hasLine={true}
          />
        </Card>
      </WingBlank>
    </>
  );
};

export default Recommend;
