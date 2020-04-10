import React, { useEffect } from 'react';
import { connect, Dispatch, SearchModelState } from 'umi';
import { ConnectState } from '@/models/connect';
import SearchInput from './SearchInput';
import List from './List';
import { QueryListType } from 'types/Query';

interface SearchProps {
  dispatch: Dispatch;
  search: SearchModelState;
}

const Search: React.FC<SearchProps> = ({ dispatch, search }) => {
  const query = ({ pageNo, searchKey = '' }: QueryListType): void => {
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
