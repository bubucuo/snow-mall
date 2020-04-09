import React, { useEffect, useRef, useState } from 'react';
import { Link, history } from 'umi';
import { Card, Button, InputItem } from 'antd-mobile';
import styles from './index.less';

export default function SearchInput({ query }: { query: Function }) {
  const searchbar = useRef(null);
  const [showSearch, setShowSearch] = useState(false);
  const [input, setInput] = useState('');
  useEffect(() => {
    searchbar.current.focus();
  }, []);
  const goHome = () => {
    if (input) {
      query({ pageNo: 0, searchKey: input });
    } else {
      history.push('/');
    }
  };

  const onChange = val => {
    setInput(val);
  };

  return (
    <Card full className={styles.main}>
      <Button className={styles.btn} onClick={goHome}>
        宝贝
      </Button>
      <InputItem
        ref={searchbar}
        className={styles.searchBar}
        // placeholder="寻找宝贝"
        maxLength={100}
        value={input}
        onChange={onChange}
      />
      <Button className={styles.btn} onClick={goHome}>
        {input ? '搜索' : '取消'}
      </Button>
    </Card>
  );
}
