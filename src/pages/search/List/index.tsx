import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon, Link, connect, Dispatch } from 'umi';
import { PullToRefresh, ListView, Button } from 'antd-mobile';
import styles from './index.less';

function Tags(props) {
  const { data = [] } = props;

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

function Node({ img, title, price, tags, id }) {
  console.log('asas', title); //sy-log
  return (
    <Link className={styles.node} to={'/product/' + id}>
      <div className={styles.imgBox}>
        <img src={img} />
      </div>
      <div className={styles.ctn}>
        <div className={styles.title}>{title}</div>
        <div className={styles.priceBox}>
          <span className={styles.yuan}>￥</span>
          <span className={styles.price}>{price}</span>
        </div>
        <Tags data={tags} />
      </div>
    </Link>
  );
}

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: "McDonald's invites you",
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = pIndex * NUM_SECTIONS + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

export default class List extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds,
      list: [],
      upLoading: false,
      pullLoading: false,
    };
  }

  componentDidMount() {
    this.props.query({ pageNo: 0 });
  }

  //上拉加载
  onEndReached = (page, lastPage) => {
    this.onRefresh();
    // //当前页小于总页数继续请求下一页数据，否则停止请求数据
    // if (Number(page) < Number(lastPage)) {
    //   this.setState({ upLoading: true });
    //   //接口请求下一页数据,完成后将upLoading设为false
    //   //...
    // }
  };

  //下拉刷新
  onRefresh = () => {
    this.setState({ pullLoading: true });
    this.props.query({ pageNo: this.props.list.pageNo + 1 });

    //接口请求第一页数据,完成后将pullLoading设为false
    //...
  };

  componentWillReceiveProps(nextProps: ListProps) {
    this.setState({ pullLoading: false });
  }

  //获取item进行展示
  renderRow = (item, i) => {
    console.log('item', item); //sy-log
    return <Node {...item} />;
    return <div>//每个item</div>;
  };
  render() {
    const { dataSource, upLoading, pullLoading } = this.state;
    const { list } = this.props;
    const { data } = list;
    return (
      <div className={styles.main}>
        {data.length ? (
          <ListView
            dataSource={dataSource.cloneWithRows(data)}
            renderRow={(rowData, id1, i) => this.renderRow(rowData, i)}
            initialListSize={10}
            pageSize={10}
            renderFooter={() => (
              <div style={{ padding: 30, textAlign: 'center' }}>
                {list.pageNo < list.totalPage && upLoading ? (
                  <Icon type="loading" />
                ) : null}
              </div>
            )}
            onEndReached={() => this.onEndReached(list.pageNo, list.totalPage)}
            onEndReachedThreshold={20}
            useBodyScroll={true}
            style={{ width: '100vw' }}
            // pullToRefresh={
            //   <PullToRefresh // import { PullToRefresh } from 'antd-mobile'
            //     refreshing={pullLoading}
            //     onRefresh={this.onRefresh}
            //   />
            // }
          />
        ) : list && list.data && !list.data.length ? (
          <div className={styles.goodEntry}>
            <p>暂无数据</p>
          </div>
        ) : null}
      </div>
    );
  }
}
