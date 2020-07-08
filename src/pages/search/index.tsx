import React, { Component } from 'react';
import SeachInput from './SearchInput/';
import List from './List/';
import { ProductType } from '@/@types/product';
import { PaginationType } from '@/@types/list';
import { query } from '@/services/search';

interface ListState {
  data: ProductType[];
  pagination: PaginationType;
}

export default class Search extends Component<{}, ListState> {
  state: ListState = {
    data: [],
    pagination: {
      totalPage: 0,
      pageNo: 0,
      pageSize: 10,
      searchKey: '',
    },
  };

  queryList = (pagination?: PaginationType) => {
    // 查询列表
    let pageNo = this.state.pagination.pageNo;
    let pageSize = this.state.pagination.pageSize;
    let searchKey = this.state.pagination.searchKey;

    if (pagination) {
      // pageNo = pagination.pageNo || pageNo;
      if (pagination.pageNo !== undefined) {
        pageNo = pagination.pageNo;
      }
      pageSize = pagination.pageSize || pageSize;
      searchKey = pagination.searchKey || searchKey;
    }
    query({
      pageNo,
      pageSize,
      searchKey,
    }).then(res => {
      const { list } = res;
      this.saveState(list);
    });
  };

  saveState = (partialState: {
    data?: ProductType[];
    pagination: PaginationType;
  }) => {
    let data = [...this.state.data, ...(partialState.data || [])];
    let pagination = {
      ...this.state.pagination,
      ...partialState.pagination,
    };

    if (pagination.pageNo === 0) {
      data = partialState.data || [];
    }

    this.setState({ data, pagination });
  };

  render() {
    const { data, pagination } = this.state;
    return (
      <div>
        <SeachInput queryList={this.queryList} />
        <List data={data} pagination={pagination} queryList={this.queryList} />
      </div>
    );
  }
}
