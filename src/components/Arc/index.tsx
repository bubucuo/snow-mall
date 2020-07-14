import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

interface ArcProps {
  className?: string;
}

const Arc: React.FC<ArcProps> = ({ className }) => {
  return (
    <div className={classnames(className, styles.main)}>
      <div className={styles.kGYGSu}></div>
    </div>
  );
};

export default Arc;
