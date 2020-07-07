import React, { useEffect, useState } from 'react';
import { Card, InputItem, Button } from 'antd-mobile';
import styles from './index.less';
import { history } from 'umi';

interface SearchInputProps {
  saveState: Function;
}
const SearchInput: React.FC<SearchInputProps> = props => {
  const [input, setInput] = useState('');
  const [searchMode, setSearchMode] = useState(false);

  useEffect(() => {
    setSearchMode(input.trim() !== '');
  }, [input]);

  const onChange = (val: string) => {
    setInput(val);
  };
  const goHome = () => {
    if (searchMode) {
      // 执行搜索
      let val = input.trim();
      props.saveState({ pagination: { pageNo: 0, searchKey: val } }, true);
    } else {
      history.push('/');
    }
  };

  return (
    <Card full className={styles.main}>
      <InputItem
        value={input}
        onChange={onChange}
        clear
        className={styles.searchBar}
      />
      <Button type="primary" onClick={goHome} className={styles.btn}>
        {searchMode ? '搜索' : '取消'}
      </Button>
    </Card>
  );
};
export default SearchInput;
