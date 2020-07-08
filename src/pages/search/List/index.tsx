import React, { Component } from 'react';
import { PaginationType } from '@/@types/list';
import { ProductType } from '@/@types/product';
import { Card, ListView, WingBlank, Icon } from 'antd-mobile';
import styles from './index.less';
import { Link } from 'umi';
import classnames from 'classnames';
import Tags from '@/components/Tags';

interface ListProps {
  data: ProductType[];
  pagination: PaginationType;
  saveState: Function;
  queryList: Function;
}
interface ListState {
  dataSource: any;
}

export default class List extends Component<ListProps, ListState> {
  state: ListState = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1: any, r2: any) => r1 !== r2,
    }),
  };

  componentDidMount() {
    this.props.queryList();
  }

  onEndReached = () => {
    const { pagination } = this.props;
    if (pagination.pageNo < pagination.totalPage - 1) {
      this.props.queryList({
        pageNo: pagination.pageNo + 1,
      });
    }
  };
  render() {
    const { data, pagination } = this.props;
    const { dataSource } = this.state;
    return (
      <Card className={styles.main}>
        <ListView
          dataSource={dataSource.cloneWithRows(data)}
          renderRow={item => Node(item)}
          initialListSize={10}
          pageSize={pagination.pageSize}
          onEndReached={this.onEndReached}
          useBodyScroll={true}
          renderFooter={() => (
            <div className="txtCenter">
              {pagination.pageNo < pagination.totalPage - 1 ? (
                <Icon type="loading" />
              ) : (
                <div>加载完毕</div>
              )}
            </div>
          )}
          // 调用onEndReached之前的临界值，单位是像素
          onEndReachedThreshold={10}
        />
      </Card>
    );
  }
}

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
