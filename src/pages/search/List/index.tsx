import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, connect, Dispatch } from 'umi';
import { ConnectState } from '@/models/connect';

import { Card, ListView } from 'antd-mobile';
import styles from './index.less';

function Node(props) {
  // const { data } = props;
  const { img, title, price, tags, id } = props;
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

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;

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

interface ListProps extends ConnectProps {
  dispatch: Dispatch;
  search: object;
}

interface ListState {
  isLoading: boolean;
  dataSource: object;
  height: number;
}

class List extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      height: (document.documentElement.clientHeight * 3) / 4,
    };
  }

  updateData = () => {
    const hei =
      document.documentElement.clientHeight -
      ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;

    genData();

    this.setState({
      dataSource: this.state.dataSource.cloneWithRowsAndSections(
        dataBlobs,
        // sectionIDs,
        // rowIDs,
      ),
      isLoading: false,
      height: hei,
    });
  };

  componentDidMount() {
    this.props.query({ pageNo: 0 });
  }

  query = () => {
    const { dispatch } = this.props;
    this.setState({ isLoading: true });
    if (dispatch) {
      dispatch({
        type: 'search/query',
        pageNo: this.props.list.pageNo + 1,
      });
    }
  };

  componentWillReceiveProps(nextProps: ListProps) {
    this.updateData();
  }

  render() {
    const { list } = this.props.search || {};
    let index = 0;
    const row = (rowData, sectionID, rowID) => {
      if (index === list.data.length - 1) {
        return null;
      }
      const obj = list.data[index++];

      return <Node key={rowID} {...obj} />;
    };

    return (
      <Card className={styles.main}>
        <ListView
          ref={el => (this.lv = el)}
          dataSource={this.state.dataSource}
          renderHeader={() => <span>header</span>}
          renderFooter={() => (
            <div style={{ padding: 30, textAlign: 'center' }}>
              {this.state.isLoading ? 'Loading...' : '加载完毕'}
            </div>
          )}
          // renderSectionHeader={sectionData => (
          //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
          // )}
          renderRow={row}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          pageSize={4}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
      </Card>
    );
  }
}

export default connect(({ search }: ConnectState) => ({ search }))(List);
