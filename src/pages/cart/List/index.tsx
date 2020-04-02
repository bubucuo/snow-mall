import React from 'react';
import { Checkbox } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';
import Counter from '@/components/Counter';

const CheckboxItem = Checkbox.CheckboxItem;

// const list = [
//   {
//     id: '0',
//     title: '暮光之城',
//     img:
//       '//img10.360buyimg.com/mobilecms/11833/105e2f6e-5b46-4c9d-8996-bf1542b77a95.jpg',
//     price: 100,
//     count: 2,
//   },
//   {
//     id: '1',
//     title: '手机',
//     img:
//       'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg',

//     price: 100,
//     count: 2,
//   },
// ];

interface NodeProps {
  key: string;
  id: string;
  title: string;
  img: string;
  price: number;
  count: number;
  checked: boolean;
  onChange: Function;
}

const Node: React.FC<NodeProps> = ({
  id,
  title,
  img,
  price,
  count,
  checked,
  onChange,
}) => {
  console.log('cou', count); //sy-log
  return (
    <div>
      <CheckboxItem
        onChange={() => onChange({ id, checked: !checked })}
        checked={checked}
      >
        <div className={styles.node}>
          <div className={styles.imgBox}>
            <img src={img} alt={title} />
          </div>
          <div className={styles.right}>
            <div className={styles.title}>{title}</div>
            <div className={styles.info}>
              <p className={classnames('red')}>￥{price}</p>
              <Counter
                value={count}
                onChange={(count: number) => onChange({ id, count })}
              />
            </div>
          </div>
        </div>
      </CheckboxItem>
    </div>
  );
};

interface IndexProps {
  onChange: Function;
  list: object[];
}

const List: React.FC<IndexProps> = ({ onChange, list = [] }) => {
  return (
    <div className={styles.main}>
      {list.map(item => (
        <Node key={item.id} {...item} onChange={onChange} />
      ))}
    </div>
  );
};

export default List;
