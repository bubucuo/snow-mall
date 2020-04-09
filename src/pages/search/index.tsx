import React, { useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import SearchInput from './SearchInput';
import List from './List';

import styles from './index.less';

interface SearchProps extends ConnectProps {
  dispatch: Dispatch;
  search: object;
}

interface queryProps {
  pageNo: number;
  pageSize: number;
}

const Search: React.FC<SearchProps> = ({ dispatch, search }) => {
  const query = ({ pageNo, searchKey = '' }: queryProps): void => {
    dispatch({
      type: 'search/query',
      payload: { pageNo, searchKey },
    });
  };

  const { list } = search;
  return (
    <div>
      <SearchInput query={query} />
      <List query={query} list={list} />
    </div>
  );
};

export default connect(({ search }: ConnectState) => ({ search }))(Search);
