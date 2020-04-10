import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'umi';
import { Card, Icon, ListView, WingBlank } from 'antd-mobile';
import styles from './index.less';
import { ProductListWithNumType, ProductType } from 'types/Product';
import classnames from 'classnames';
import Tags from '@/components/Tags';

function Node({ img, title, price, tags, id }: ProductType) {
  return (
    <Link className={styles.node} to={'/product/' + id}>
      <div className={classnames(styles.imgBox, 'xyCenter')}>
        <img src={img} />
      </div>
      <WingBlank size="lg" className={styles.ctn}>
        <div className="twoRows">{title}</div>
        <div className={classnames(styles.priceBox, 'font16')}>
          <span className={styles.yuan}>￥</span>
          <span className={styles.price}>{price}</span>
        </div>
        <Tags tags={tags} />
      </WingBlank>
    </Link>
  );
}

interface ListProps {
  list: ProductListWithNumType;
  query: Function;
}

interface ListState {
  dataSource: any;
}

export default class List extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1: any, r2: any) => r1 !== r2,
      }),
    };
  }

  componentDidMount() {
    this.props.query({ pageNo: 0 });
  }

  //下拉刷新
  onEndReached = () => {
    const { pageNo, totalPage, searchKey, data } = this.props.list;
    if (data.length < totalPage) {
      this.props.query({ pageNo: pageNo + 1, searchKey });
    }
  };

  //获取item进行展示
  renderRow = (item: ProductType) => {
    return <Node {...item} />;
  };
  render() {
    const { dataSource } = this.state;
    const { list } = this.props;
    const { data, totalPage } = list;
    return (
      <Card full className={styles.main}>
        {data.length ? (
          <ListView
            dataSource={dataSource.cloneWithRows(data)}
            renderRow={this.renderRow}
            initialListSize={10}
            pageSize={10}
            renderFooter={() => (
              <div className="txtCenter">
                {data.length < totalPage ? (
                  <Icon type="loading" />
                ) : (
                  <div>加载完毕</div>
                )}
              </div>
            )}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}
            useBodyScroll={true}
            style={{ width: '100vw' }}
          />
        ) : (
          <div className="txtCenter font14">暂无数据</div>
        )}
      </Card>
    );
  }
}
