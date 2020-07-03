import React from 'react';
import styles from './index.less';

const navArr = [
  {
    icon:
      'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
    title: '京东超市',
    link: '//h5.m.jd.com/rn/3LmeNuQDfT1nN8qZS4jZoZQMFeV7/index.html',
  },
  {
    icon:
      'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp',
    title: '数码电器',
    link:
      'https://pro.m.jd.com/mall/active/3rAACSv3E1VYnu9w4TFtboYD2d4R/index.html',
  },
  {
    icon:
      'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp',
    title: '服饰美妆',
    link:
      'https://h5.m.jd.com/babelDiy/Zeus/28Lq4LbJDJcuMhNb9tQ6EcbZ8GTu/index.html',
  },
  {
    icon:
      'https://m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp',
    title: '京东生鲜',
    link:
      'https://pro.m.jd.com/mall/active/4P9a2T9osR9JvtzHVaYTPvsecRtg/index.html?has_native=0',
  },
  {
    icon:
      'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp',
    title: '京东到家',
    link: 'https://daojia.jd.com/html/index.html?channel=jdapp',
  },
  {
    icon:
      'https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
    title: '充值缴费',
    link: 'https://newcz.m.jd.com/',
  },
  {
    icon:
      'https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
    title: '9.9元拼',
    link: 'https://wqs.jd.com/pingou/index.shtml?ptag=138097.1.8&sceneval=2',
  },
  {
    icon:
      'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
    title: '领券',
    link: 'https://coupon.m.jd.com/center/getCouponCenter.action',
  },
  {
    icon:
      'https://m.360buyimg.com/mobilecms/s120x120_jfs/t17116/175/2673385904/6610/50f5ef50/5b03b7aeNf3a7fa37.png.webp',
    title: '借钱',
    link: 'https://u.jr.jd.com/growing/reMoney/home/?t=0',
  },
  {
    icon:
      'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp',
    title: 'plus会员',
    link: 'https://plus.m.jd.com/index',
  },
];

export default function NavMall() {
  return (
    <ul className={styles.main}>
      {navArr.map((item, index) => {
        return <Nav key={item.link} {...item} />;
      })}
    </ul>
  );
}

interface NavProps {
  icon: string;
  title: string;
  link: string;
}

function Nav({ icon, title, link }: NavProps) {
  return (
    <li className={styles.nav}>
      <a href={link}>
        <img className={styles.navIcon} src={icon} />
        <div className={styles.title}>{title}</div>
      </a>
    </li>
  );
}
