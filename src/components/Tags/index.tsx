import React from 'react';
import classnames from 'classnames';
import styles from './index.less';
import { Tag } from 'antd-mobile';

interface Props {
  tags: string[];
}

const Tags: React.FC<Props> = ({ tags = [] }) => {
  return (
    <div className={classnames(styles.main)}>
      {tags.map((tag, item) => (
        <Tag className={styles.tag}>{tag}</Tag>
      ))}
    </div>
  );
};

export default Tags;
