import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'umi';
import { Card, Icon, ListView, WingBlank } from 'antd-mobile';
import styles from './index.less';
import { Product, ProductList } from '@/models/connect';

function Tags({ data = [] }) {
  return (
    <ul className={styles.tags}>
      {data.map((item, index) => {
        return (
          <li className={styles.tag} key={'tag' + index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}

function Node({ img, title, price, tags, id }: Product) {
  return (
    <Link className={styles.node} to={'/product/' + id}>
      <div className={styles.imgBox}>
        <img src={img} />
      </div>
      <WingBlank size="lg" className={styles.ctn}>
        <div className={styles.title}>{title}</div>
        <div className={styles.priceBox}>
          <span className={styles.yuan}>￥</span>
          <span className={styles.price}>{price}</span>
        </div>
        <Tags data={tags} />
      </WingBlank>
    </Link>
  );
}

interface ListProps {
  list: ProductList;
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
  renderRow = (item: Product) => {
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
