import React, { useState, useCallback, useRef, useEffect } from 'react';
import styles from './index.less';
import { InputItem, Button } from 'antd-mobile';
import { history } from 'umi';

interface SearchInputProps {
  queryList: Function;
}
const SearchInput: React.FC<SearchInputProps> = props => {
  const inputRef = useRef<any>(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [input, setInput] = useState<string>('');

  const inputChange = useCallback((val: string) => {
    setInput(val);
  }, []);

  const [searchMode, setSearchMode] = useState<boolean>(false);
  const handle = useCallback(() => {
    if (searchMode) {
      // 搜索
      const val = input.trim();
      console.log('搜索', val); //sy-log
      props.queryList({ searchKey: val, pageNo: 0 });
    } else {
      history.push('/');
    }
  }, [searchMode, input]);

  useEffect(() => {
    const val = input.trim();
    setSearchMode(val !== '');
  }, [input]);
  return (
    <div className={styles.main}>
      <InputItem
        ref={inputRef}
        value={input}
        onChange={inputChange}
        clear
        className={styles.searchBar}
      />
      <Button
        type="primary"
        onClick={handle}
        className={styles.btn}
        disabled={false}
      >
        {searchMode ? '搜索' : '取消'}
      </Button>
    </div>
  );
};
export default SearchInput;
